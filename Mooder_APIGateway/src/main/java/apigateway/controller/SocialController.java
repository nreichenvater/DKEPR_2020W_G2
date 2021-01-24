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
		this.userController = userController;
		httpClient = new OkHttpClient();
		initRoutes();
	}
	
	public void initRoutes() {
		
		post("/follow", (request,response) ->  {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			
			System.out.println(request.headers().toString());
			System.out.println("follow request body" + request.body());
			
			int status = follow(request.body());
			response.status(status);
			if(status == 200) {
				return "Der Follow wurde erfolgreich angelegt";
			}
			
			return "Der Follow konnte nicht angelegt werden";
		});
		
		post("/unfollow", (request,response) ->  {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			
			int status = unfollow(request.body());
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
			
			List<String> users = getUserAndFollowed(user);
			if(users == null) {
				response.status(500);
				return "Der Feed konnte nicht geladen werden";
			}
			
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
			
			
			//Liste der follower des Searching User holen
			List<String> followers = getFollower(searchingUser);
			
			
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
			
			
			//Post-Suche
			List<Post> posts = postController.getAllPosts();
			System.out.println(posts.size() + " + 3");
			
			//Suche im Post String
			List<Post> filteredPosts = new ArrayList<Post>();
			for(Post post : posts) {
				System.out.println(post.toString());
				if(post.getPost().toLowerCase().contains(searchString.toLowerCase()) || post.getUserid().toLowerCase().contains(searchString.toLowerCase())) {
					System.out.println("found post: " + post.getPost());
					filteredPosts.add(post);
				}
			}
			result.setSearchResultPosts(filteredPosts);
			
			System.out.println("result: " + result.toString());
			
			return new Gson().toJson(result, SearchResult.class);
		});
		
		get("/visibility", (request, response) -> {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			
			return isUserPrivate(user);
		});
		
		patch("/visibility", (request, response) -> {
			String authorization = request.headers("Authorization");
			String user = request.headers("user");
			
			if(!userController.userLoggedIn(authorization, user)) {
				response.status(403);
				return "Ihre Session ist abgelaufen, bitte melden Sie sich erneut an.";
			}
			
			JsonParser parser = new JsonParser();
			JsonElement jsonTree = parser.parse(request.body());
			JsonObject object = jsonTree.getAsJsonObject();
			JsonElement t2 = object.get("visible");
			boolean visible = t2.getAsBoolean();
			
			if(setVisibility(user, visible)) {
				return "Erfolg";
			}
			
			response.status(500);
			return "Fehler";
		});
	}

	public List<String> getUserAndFollowed(String user) {
		
        Request request = new Request.Builder()
            .url(serviceController.nextSocialService().getFullIp() + "/user")
            .get()
            .addHeader("userid", user)
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
		
		System.out.println(responseBody);
        
        return new Gson().fromJson(responseBody, List.class);
	}
	
	private int follow(String requestBody) {
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
	
	private int unfollow(String requestBody) {
		RequestBody body = RequestBody.create(JSON, requestBody);
		
        Request request = new Request.Builder()
            .url(serviceController.nextSocialService().getFullIp() + "/unfollow")
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
	
	private boolean isUserPrivate(String user) {
		return false;
	}
	
	private boolean setVisibility(String user, boolean visible) {
		return true;
	}

}
