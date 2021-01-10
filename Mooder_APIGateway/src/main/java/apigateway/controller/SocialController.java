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

import apigateway.dto.Post;
import apigateway.dto.SearchResult;
import apigateway.dto.User;

import static spark.Spark.*;

public class SocialController {
	
	private ServiceController serviceController;
	private UserController userController;
	private OkHttpClient httpClient;
	private PostController postController;
	private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
	
	public SocialController(ServiceController serviceController, UserController userController, PostController postController) {
		this.serviceController = serviceController;
		this.postController = postController;
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
		
		get("/followed", (request, response) -> {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			
			List<String> users = getUserAndFollowed(user, request.body());
			if(users == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
			
			//ersten eintrag löschen (user selbst)
			
			response.status(200);
			return new Gson().toJson(users);
		});
		
		get("/search", (request, response) -> {
			//String authorization = request.headers("Authorization");
			String searchString = request.headers("searchString");
			String searchingUser = request.headers("searchingUser");
			SearchResult result = new SearchResult();
			
			System.out.println("searchString: " + searchString);
			System.out.println("user: " + searchingUser);
			
			//Liste mit allen Usern
			List<String> allUsers = getAllUsers();
			
			System.out.println("allUsers: " + allUsers.get(0));
			
			List<String> filteredUsers = new ArrayList<String>();
			//Suchen von usern mit suchstring im Username
			for(String user : allUsers) {
				if(user.toLowerCase().contains(searchString.toLowerCase()) && !user.equals(searchingUser)) {
					System.out.println("found user: " + user);
					filteredUsers.add(user);
				}
			}
			
			System.out.println("filteredUsers: " + allUsers.get(0));
			
			//Liste der follower des Searching User holen
			List<String> followers = getFollower(searchingUser);
			
			System.out.println("followers: " + followers.get(0));
			
			//Merging
			List<User> searchResultListUsers = new ArrayList<User>();
			for(String user : filteredUsers) {
				boolean follows = false;
				for(String follower : followers) {
					if(follower.equals(user)) {
						follows = true;
					}
				}
				searchResultListUsers.add(new User(user, follows));
				
			}
			result.setSearchResultUsers(searchResultListUsers);
			
			System.out.println("searchResultListUsers: " + searchResultListUsers.get(0));
			
			
			//Post-Suche
			List<Post> posts = postController.getAllPosts();
			System.out.println(posts.size() + " + 3");
			
			System.out.println("posts: " + posts.get(0).toString());
			
			//Suche im Post String
			List<Post> filteredPosts = new ArrayList<Post>();
			for(Post post : posts) {
				System.out.println(post.toString());
				if(post.getPost().toLowerCase().contains(searchString.toLowerCase())) {
					System.out.println("found post: " + post.getPost());
					filteredPosts.add(post);
				}
			}
			result.setSearchResultPosts(filteredPosts);
			
			System.out.println("result: " + result.toString());
			
			return new Gson().toJson(result, SearchResult.class);
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
	
	public List<String> getAllUsers(){

        Request request = new Request.Builder()
            .url(serviceController.nextSocialService().getFullIp() + "/users")
            .get()
            .build();
        
        Response response;
		try {
			response = httpClient.newCall(request).execute();
		} catch (IOException e) {
			System.out.println(e.getMessage());
			return null;
		}
		
		String res = "";
		
		try {
			res = response.body().string();
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
		
		return new Gson().fromJson(res, List.class);
	}
	
	public List<String> getFollower(String searchingUser){
		 Request request = new Request.Builder()
		            .url(serviceController.nextSocialService().getFullIp() + "/follower")
		            .get()
		            .addHeader("searchingUser", searchingUser)
		            .build();
		 
		 Response response;
			try {
				response = httpClient.newCall(request).execute();
			} catch (IOException e) {
				return null;
			}
			
		String res = "";
		
		try {
			res = response.body().string();
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
			
		return new Gson().fromJson(res, List.class);	
	}

}
