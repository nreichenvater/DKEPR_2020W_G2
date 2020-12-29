package apigateway.controller;

import static spark.Spark.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class PostController {

	private ServiceController serviceController;
	private UserController userController;
	private SocialController socialController;
	private OkHttpClient httpClient;
	private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
	
	public PostController(ServiceController serviceController, UserController userController, SocialController socialController) {
		this.serviceController = serviceController;
		this.userController = userController;
		this.socialController = socialController;
		httpClient = new OkHttpClient();
		initRoutes();
	}
	
	public void initRoutes(){
		
		post("/post", (request,response) ->  {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			
			int status = createPost(request.body(), user);
			response.status(status);
			if(status == 200) {
				return "Der Post wurde erfolgreich angelegt";
			}
			
			return "Der Post konnte nicht angelegt werden";
		});
		
		delete("/post", (request,response) -> {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			
			int status = deletePost(request.body(), user);
			response.status(status);
			if(status == 200) {
				return "Der Post wurde erfolgreich gelöscht";
			}
			
			return "Der Post konnte nicht gelöscht werden";
		});
		
		get("/feed", (request, response) -> {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			
			List<String> users = socialController.getUserAndFollowed(user);
			if(users == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
				
			String feed = getFeed(users);
			if(feed == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
			
			response.status(200);
			response.body(feed);
			return "";
		});
		
		get("/post", (request, response) -> {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			
			List<String> users = socialController.getUserAndFollowed(user);
			if(users == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
				
			String feed = getRecent(users);
			if(feed == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
			
			response.status(200);
			response.body(feed);
			return "";
		});
		
		get("/recent", (request, response) -> {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			
			List<String> users = new ArrayList<String>();
			users.add(user);
				
			String feed = getFeed(users);
			if(feed == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
			
			response.status(200);
			response.body(feed);
			return "";
		});
		
	}
	
	private int createPost(String requestBody, String user) {
		RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(serviceController.nextPostService().getFullIp() + "/post")
            .addHeader("user", user)
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
	
	private int deletePost(String requestBody, String user) {
		RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(serviceController.nextPostService().getFullIp() + "/post")
            .addHeader("user", user)
            .delete(body)
            .build();
        
        Response response;
		try {
			response = httpClient.newCall(request).execute();
		} catch (IOException e) {
			return 0;
		}
        
        return response.code();
	}
	
	private String getFeed(List<String> users) {
		String requestBody = new Gson().toJson(users);
		RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(serviceController.nextPostService().getFullIp() + "/posts")
            .post(body)
            .build();
        
        Response response;
        String feed;
		try {
			response = httpClient.newCall(request).execute();
			feed = response.body().toString();
		} catch (IOException e) {
			return null;
		}
        
        return feed;
	}
	
	private String getRecent(List<String> users) {
		String requestBody = new Gson().toJson(users);
		RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(serviceController.nextPostService().getFullIp() + "/recent")
            .post(body)
            .build();
        
        Response response;
        String feed;
		try {
			response = httpClient.newCall(request).execute();
			feed = response.body().toString();
		} catch (IOException e) {
			return null;
		}
        
        return feed;
	}
}
