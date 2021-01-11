package apigateway.controller;

import static spark.Spark.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

import apigateway.dto.Post;
import apigateway.dto.Postlists;

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
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			
			int status = createPost(request.body());
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
				
			List<Post> feed = getFeed(users);
			if(feed == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
			
			response.status(200);
			return new Gson().toJson(feed);
		});
		
		get("/posts", (request, response) -> {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			
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
			
			List<String> users = socialController.getUserAndFollowed(user);
			
			if(users == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
				
			String feed = getRecent(users);
			System.out.println(feed);
			Postlists pl = new Gson().fromJson(feed, Postlists.class);
			System.out.println(pl.toString());
			if(pl == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
			
			response.status(200);
			return new Gson().toJson(pl);
		});
		
	}
	
	private int createPost(String requestBody) {
		
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
            .url(serviceController.nextPostService().getFullIp() + "/feed")
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
	
	private String getRecent(List<String> users) {
		String requestBody = new Gson().toJson(users);
		System.out.println(users);
		RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(serviceController.nextPostService().getFullIp() + "/recent")
            .post(body)
            .build();
        
        Response response;
        String posts;
		try {
			response = httpClient.newCall(request).execute();
			posts = response.body().string();
			System.out.println(posts);
		} catch (IOException e) {
			return null;
		}
        
        return posts;
	}
	
	public List<Post> getAllPosts(){
		System.out.println("do sama jetza");
		Request request = new Request.Builder()
	            .url(serviceController.nextPostService().getFullIp() + "/posts")
	            .get()
	            .build();
	        
	        Response response;
	        List<Post> posts = new ArrayList<Post>();
	        JsonParser parser = new JsonParser();
			try {
				response = httpClient.newCall(request).execute();
				String body = "{\"postArray\":" + response.body().string() + "}";
				
				JsonObject obj = parser.parse(body).getAsJsonObject();
				JsonArray arr = obj.getAsJsonArray("postArray");
				
				for(JsonElement je : arr) {
					JsonObject o = je.getAsJsonObject();
					o.remove("timestamp");
					System.out.println(o.toString());
					posts.add(new Gson().fromJson(o, Post.class));
				}
				
			} catch (Exception e) {
				e.printStackTrace();
				return null;
			}
		
		return posts;
	}
}
