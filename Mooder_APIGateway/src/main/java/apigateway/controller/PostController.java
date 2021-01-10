package apigateway.controller;

import static spark.Spark.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

import apigateway.dto.Post;

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
	
	public PostController() {
		httpClient = new OkHttpClient();
		initRoutes();
	}
	
	
	public void setServiceController(ServiceController serviceController) {
		this.serviceController = serviceController;
	}

	public void setUserController(UserController userController) {
		this.userController = userController;
	}

	public void setSocialController(SocialController socialController) {
		this.socialController = socialController;
	}

	public void initRoutes(){
		
		post("/post", (request,response) ->  {
			System.out.println("erstellen");
			//String authorization = request.headers("Authorization");
			//String user = request.headers("user");
			/*
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			*/
			int status = createPost(request.body(), "testuser");
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
		
		post("/feed", (request, response) -> {
			//String authorization = request.headers("Authorization");
			//String user = request.headers("user");
			String user = "test";
			
			
			/*
			 * User u = new User(user);
			 * String requestBody = new Gson().toJson(u);
			 */
			
			
			/*
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			*/
			System.out.println("body" + request.body());
			List<String> users = socialController.getUserAndFollowed(user, request.body());
			if(users == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
				
			List<Post> feed = getFeed(users);
			if(feed == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
			
			response.status(200);
			return new Gson().toJson(feed);
		});
		
		post("/posts", (request, response) -> {
			//String authorization = request.headers("Authorization");
			//String user = request.headers("user");
			String user = "seppHati1";
			/*if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}*/
			
			List<String> users = new ArrayList<String>();
			users.add(user);
				
			List<Post> feed = getFeed(users);
			if(feed == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
			
			response.status(200);
			return new Gson().toJson(feed);
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
				
			List<Post> feed = getRecent(users);
			if(feed == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
			
			response.status(200);
			return new Gson().toJson(feed);
		});
		
	}
	
	private int createPost(String requestBody, String user) {
		System.out.println("create post start");
		System.out.println("request body: " + requestBody);
		RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(serviceController.nextPostService().getFullIp() + "/post")
            .post(body)
            .build();
        
        Response response;
		try {
			System.out.println("try");
			response = httpClient.newCall(request).execute();
		} catch (IOException e) {
			System.out.println(e.getMessage());
			return 0;
		}
        
		System.out.println(response.code());
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
	
	private List<Post> getFeed(List<String> users) {
		String requestBody = new Gson().toJson(users);
		System.out.println(users);
		RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(serviceController.nextPostService().getFullIp() + "/posts")
            .post(body)
            .build();
        
        Response response;
        List<Post> feed;
		try {
			response = httpClient.newCall(request).execute();
			feed = new Gson().fromJson(response.body().string(), List.class);
		} catch (IOException e) {
			return null;
		}
        
        System.out.println("do" + feed.toString());
		return feed;
	}
	
	private List<Post> getRecent(List<String> users) {
		String requestBody = new Gson().toJson(users);
		RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(serviceController.nextPostService().getFullIp() + "/recent")
            .post(body)
            .build();
        
        Response response;
        List<Post> feed;
		try {
			response = httpClient.newCall(request).execute();
			feed = new Gson().fromJson(response.body().string(), List.class);
		} catch (IOException e) {
			return null;
		}
        
        return feed;
	}
	
	public List<Post> getAllPosts(){
		System.out.println("do sama jetza");
		Request request = new Request.Builder()
	            .url(serviceController.nextPostService().getFullIp() + "/posts")
	            .get()
	            .build();
	        
	        Response response;
	        List<JsonObject> postStrings;
			try {
				response = httpClient.newCall(request).execute();
				String resBody = response.body().string();
				System.out.println(resBody);
				postStrings = new Gson().fromJson(resBody, List.class);
			} catch (IOException e) {
				System.out.println(e.getMessage());
				return null;
			}
			
			System.out.println(postStrings.size());
			System.out.println(postStrings.toString());
			
			for(JsonObject s : postStrings) {
				System.out.println(s);
			}
			
			List<Post> posts = new ArrayList<Post>();
			for(JsonObject s : postStrings) {
				posts.add(new Gson().fromJson(s, Post.class));
			}
			System.out.println(posts.size() + " + 2");
		
		return posts;
	}
}
