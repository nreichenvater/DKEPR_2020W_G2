package socialService.services;

import static spark.Spark.get;
import static spark.Spark.*;
import static spark.Spark.options;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import socialService.dao.SocialServiceUserDao;
import socialService.data.User;
import socialService.server.ResponseStatus;

public class SocialServiceEndpoint {
	
	public SocialServiceEndpoint(SocialServiceUserDao socialServiceUserDao) {
		options("/*",
		        (request, response) -> {

		            String accessControlRequestHeaders = request
		                    .headers("Access-Control-Request-Headers");
		            if (accessControlRequestHeaders != null) {
		                response.header("Access-Control-Allow-Headers",
		                        accessControlRequestHeaders);
		            }

		            String accessControlRequestMethod = request
		                    .headers("Access-Control-Request-Method");
		            if (accessControlRequestMethod != null) {
		                response.header("Access-Control-Allow-Methods",
		                        accessControlRequestMethod);
		            }

		            return "OK";
		        });
		
		get("/users", (request, response) -> {
			response.type("application/json");
			System.out.println("Request empfangen!");
			return new Gson().toJson(socialServiceUserDao.getUsers());		
		});
		
		get("/user", (request, response) -> {
			response.type("application/json");
			System.out.println("User-Request empfangen!");
	
			JsonParser parser = new JsonParser();
			JsonElement jsonTree = parser.parse(request.body());
			JsonObject object = jsonTree.getAsJsonObject();
			JsonElement t2 = object.get("userId");
			String userId = t2.getAsString();

			return new Gson().toJson(socialServiceUserDao.getUser(userId));		
		});
		
		post("/register", (request, response) -> {
			response.type("application/json");
			System.out.println("Register-Request empfangen!");
			
			User user = new Gson().fromJson(request.body(), User.class);
			
			try {
				socialServiceUserDao.register(user);
			}catch(Exception e) {
				e.printStackTrace();
				return new Gson().toJson(ResponseStatus.ERROR);
			}
			
			
			return new Gson().toJson(ResponseStatus.SUCCESS);
		});
		
		post("/follow", (request, response) -> {
			response.type("application/json");
			System.out.println("Follow-Request empfangen!");
			
			JsonParser parser = new JsonParser();
			JsonElement jsonTree = parser.parse(request.body());
			JsonObject object = jsonTree.getAsJsonObject();
			JsonElement t2 = object.get("callingUserId");
			String callingUserId = t2.getAsString();
			JsonElement t3 = object.get("followUserId");
			String followUserId = t3.getAsString();
			
			try {
				socialServiceUserDao.follow(callingUserId, followUserId);
			}catch(Exception e) {
				e.printStackTrace();
				return new Gson().toJson(ResponseStatus.ERROR);
			}
			
			return new Gson().toJson(ResponseStatus.SUCCESS);
		});
		
		post("unfollow", (request, response) -> {
			response.type("application/json");
			System.out.println("UnFollow-Request empfangen!");
			
			JsonParser parser = new JsonParser();
			JsonElement jsonTree = parser.parse(request.body());
			JsonObject object = jsonTree.getAsJsonObject();
			JsonElement t2 = object.get("callingUserId");
			String callingUserId = t2.getAsString();
			JsonElement t3 = object.get("unfollowUserId");
			String unfollowUserId = t3.getAsString();
			
			try {
				socialServiceUserDao.unfollow(callingUserId, unfollowUserId);
			}catch(Exception e) {
				e.printStackTrace();
				return new Gson().toJson(ResponseStatus.ERROR);
			}
			
			return new Gson().toJson(ResponseStatus.SUCCESS);
		});
		
		
		
		
	}
	
}
