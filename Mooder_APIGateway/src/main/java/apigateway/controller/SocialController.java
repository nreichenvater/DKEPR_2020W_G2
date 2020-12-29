package apigateway.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

import static spark.Spark.*;

public class SocialController {
	
	private ServiceController serviceController;
	private UserController userController;
	private OkHttpClient httpClient;
	private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
	
	public SocialController(ServiceController serviceController, UserController userController) {
		this.serviceController = serviceController;
		httpClient = new OkHttpClient();
		initRoutes();
	}
	
	public void initRoutes() {
		post("/follow", (request,response) ->  {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			/*
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			*/
			int status = follow(request.body(), user);
			response.status(status);
			if(status == 200) {
				return "Der Follow wurde erfolgreich angelegt";
			}
			
			return "Der Follow konnte nicht angelegt werden";
		});
	}

	public List<String> getUserAndFollowed(String user, String requestBody) {
		
		RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(serviceController.nextSocialService().getFullIp() + "/user")
            .post(body)
            .build();
        
        Response response;
		try {
			response = httpClient.newCall(request).execute();
		} catch (IOException e) {
			return null;
		}
		
		String responseBody = null;
		try {
			responseBody = response.body().string();
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
        
        List<String> users = new Gson().fromJson(responseBody, List.class);
        
        return users;
	}
	
	private int follow(String requestBody, String user) {
		RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(serviceController.nextSocialService().getFullIp() + "/follow")
            .post(body)
            .build();
        
        Response response;
		try {
			response = httpClient.newCall(request).execute();
		} catch (IOException e) {
			return 0;
		}
        
        return response.code();
	}

}
