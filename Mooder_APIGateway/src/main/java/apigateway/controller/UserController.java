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

import com.google.gson.JsonIOException;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

public class UserController {
	
	private ServiceController serviceController;
	
	public UserController(ServiceController serviceController) {
		this.serviceController = serviceController;
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
			JsonObject loginResponse = doPostRequest(request.body(), "", serviceController.nextUserService().getFullIp() + "/login");
			response.status(loginResponse.get("status").getAsInt());
			/* if(loginResponse.get("status").getAsInt() == 200) {
				return loginResponse;
			} */
			return loginResponse;
		});
		
		get("/user", (request,response) -> {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			JsonObject userResponse = doGetRequest(authorization, user, serviceController.nextUserService().getFullIp() + "/user");
			return userResponse;
		});
		
		delete("/user", (request,response) -> {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			doDeleteRequest(authorization, user, serviceController.nextUserService().getFullIp() + "/user");
			return "";
		});
		
	}
	
	private int doRegistration(String requestBody) throws MalformedURLException, IOException {
		
		String step = "user";
		int responseStatus = 0;
		boolean done = false;
		
		String username = new JsonParser().parse(requestBody).getAsJsonObject().get("username").getAsString();
		
		while(!done) {
			switch(step) {
			case "user":
				JsonObject userResponse = doPostRequest(requestBody, "", serviceController.nextUserService().getFullIp() + "/register");
				if(userResponse.get("status").getAsInt() == 200) {
					step = "social";
				}
				else {
					responseStatus = 500;
					done = true;
				}
				break;
			case "social":
				JsonObject socialResponse = doPostRequest(requestBody, "", serviceController.nextSocialService().getFullIp() + "/register");
				if(socialResponse.get("status").getAsInt() != 200) {
					doDeleteRequest("user", serviceController.nextUserService().getFullIp() + "/delete", username);
					responseStatus = 500;
				}
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
		con.setRequestProperty("Authorization", authorization);
		con.setRequestProperty("user", user);
		//con.setDoOutput(true);
        
        InputStream inputStream = new BufferedInputStream(con.getInputStream());
        JsonParser jsonParser = new JsonParser();
        
        return (JsonObject)jsonParser.parse(new InputStreamReader(inputStream, "UTF-8"));
	}
	
	private JsonObject doPostRequest(String requestBody, String requestHeader, String requestUrl) throws UnsupportedEncodingException, IOException {
		
		URL url = new URL(requestUrl);
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setRequestMethod("POST");
		con.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
		con.setRequestProperty("Accept", "application/json");
		con.setDoOutput(true);

        OutputStream os = con.getOutputStream();
        os.write(requestBody.getBytes("UTF-8"));
        os.close();
        
        InputStream inputStream = new BufferedInputStream(con.getInputStream());
        JsonParser jsonParser = new JsonParser();
        
        return (JsonObject)jsonParser.parse(new InputStreamReader(inputStream, "UTF-8"));
	}
	
	private void doDeleteRequest(String service, String requestUrl, String username) throws IOException {
		
		String usernameJson = "{ \"username\": \"" + username + "\" }";
		
		URL url = new URL(requestUrl);
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setRequestMethod("DELETE");
		con.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
		con.setRequestProperty("Accept", "application/json");
		con.setDoOutput(true);
		
		OutputStream os = con.getOutputStream();
        os.write(usernameJson.getBytes("UTF-8"));
        os.close();
        
	}
	
	boolean userLoggedIn(String authorization, String user) throws IOException {
		
		URL url = new URL(serviceController.nextUserService().getFullIp() + "/user");
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setRequestMethod("GET");
		//con.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
		con.setRequestProperty("Accept", "application/json");
		con.setRequestProperty("Authorization", authorization);
		con.setRequestProperty("user", user);
		//con.setDoOutput(true);
        
        InputStream inputStream = new BufferedInputStream(con.getInputStream());
        JsonParser jsonParser = new JsonParser();
        
        JsonObject userResponse = (JsonObject)jsonParser.parse(new InputStreamReader(inputStream, "UTF-8"));
        if(userResponse.get("status").getAsInt() == 200) {
        	return true;
        }
        return false;
	}
	
}

