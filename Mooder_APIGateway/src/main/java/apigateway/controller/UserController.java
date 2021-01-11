package apigateway.controller;

import static spark.Spark.*;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonIOException;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

import apigateway.dto.Post;

public class UserController {
	
	private ServiceController serviceController;
	private OkHttpClient httpClient;
	private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
	
	public UserController(ServiceController serviceController) {
		this.serviceController = serviceController;
		httpClient = new OkHttpClient();
		initRoutes();
	}

	public void initRoutes() {
		
		post("/register", (request,response) ->  {
			try {
				response.status(doRegistration(request.body()));
			} catch(Exception e) {
				response.status(500);
				return "Ein Fehler ist aufgetreten.";
			}
			return "Die Registrierung war erfolgreich";
		});
		
		post("/login", (request,response) -> {
			Response loginResponse = doPostRequest(request.body(), "", serviceController.nextUserService().getFullIp() + "/login");
			if(loginResponse.code() != 200) {
				response.status(loginResponse.code());
				return "Der login war nicht erfolgreich";
			}
			response.status(200);
			String responseString = loginResponse.body().string();
			System.out.println(responseString);
			return responseString;
		});
		
		get("/user", (request,response) -> {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			//JsonObject userResponse = doGetRequest(authorization, user, serviceController.nextUserService().getFullIp() + "/user");
			if(userLoggedIn(authorization, user)) {
				response.status(200);
				return "Token in Ordnung";
			}
			response.status(403);
			return "Token nicht in Ordnung";
		});
		
		delete("/user", (request,response) -> {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			deleteUser(authorization, user, serviceController.nextUserService().getFullIp() + "/user");
			return "";
		});
		
	}
	
	private int doRegistration(String requestBody) throws MalformedURLException, IOException {
		
		System.out.println(requestBody);
		
		String step = "user";
		int responseStatus = 0;
		boolean done = false;
		
		String username = new JsonParser().parse(requestBody).getAsJsonObject().get("username").getAsString();
		
		System.out.println("step " + step);
		
		while(!done) {
			switch(step) {
			case "user":
				System.out.println("jetzt user im userservice anlegen");
				Response userResponse = doPostRequest(requestBody, "", serviceController.nextUserService().getFullIp() + "/register");
				if(userResponse.code() == 200) {
					step = "social";
				}
				else {
					responseStatus = 500;
					done = true;
				}
				break;
			case "social":
				System.out.println("jetzt user im socialservice anlegen");
				Response socialResponse = doPostRequest(requestBody, "", serviceController.nextSocialService().getFullIp() + "/register");
				if(socialResponse.code() != 200) {
					deleteUser("user", serviceController.nextUserService().getFullIp() + "/delete", username);
					responseStatus = 500;
				}
				responseStatus = 200;
				done = true;
			}
		}
		
		return responseStatus;
	}
	
	private JsonObject doGetRequest(String authorization, String user, String requestUrl) throws JsonIOException, JsonSyntaxException, IOException {
		
		URL url = new URL(requestUrl);
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setRequestMethod("GET");
		con.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
		con.setRequestProperty("Accept", "application/json");
		authorization = "Bearer " + authorization;
		con.setRequestProperty("Authorization", authorization);
		con.setRequestProperty("username", user);
        
        InputStream inputStream = new BufferedInputStream(con.getInputStream());
        JsonParser jsonParser = new JsonParser();
        
        return (JsonObject)jsonParser.parse(new InputStreamReader(inputStream, "UTF-8"));
	}
	
	private Response doPostRequest(String requestBody, String requestHeader, String requestUrl) throws UnsupportedEncodingException, IOException {
		
		System.out.println("postrequest mit body " + requestBody);
		
		RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(requestUrl)
            .post(body)
            .build();
        
        Response response;
		try {
			response = httpClient.newCall(request).execute();
		} catch (IOException e) {
			return null;
		}
		
		return response;
	}
	
	private int deleteUser(String service, String requestUrl, String username) throws IOException {
		
		String requestBody = "{ \"username\": \"" + username + "\" }";
		
        RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(requestUrl)
            .delete(body)
            .build();
        
        Response response;
		try {
			response = httpClient.newCall(request).execute();
		} catch (IOException e) {
			return 500;
		}
        
        return response.code();
        
	}
	
	boolean userLoggedIn(String authorization, String user) throws IOException {
		
		System.out.println("token = " + authorization);
		System.out.println("user = " + user);
		
		Request request = new Request.Builder()
	            .url(serviceController.nextUserService().getFullIp()  + "/user")
	            .get()
	            .addHeader("username", user)
			 	.addHeader("Authorization", authorization)
	            .build();
		
		 Response response;
			try {
				response = httpClient.newCall(request).execute();
				System.out.println(response.body().string());
			} catch (IOException e) {
				return false;
			}
		
        if(response.code() == 200) {
        	return true;
        }
        return false;
	}
	
}

