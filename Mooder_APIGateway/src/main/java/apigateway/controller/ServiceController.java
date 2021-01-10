package apigateway.controller;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import static spark.Spark.*;
import apigateway.dto.RegisteredService;

public class ServiceController {
	
	private List<RegisteredService> registeredUserServices;
	private List<RegisteredService> registeredPostServices;
	private List<RegisteredService> registeredSocialServices;
	private JsonParser jsonParser;
	private int nextUserServiceCounter;
	private int nextPostServiceCounter;
	private int nextSocialServiceCounter;
	
	public ServiceController() {
		jsonParser  = new JsonParser();
		registeredUserServices = new ArrayList<RegisteredService>();
		registeredPostServices = new ArrayList<RegisteredService>();
		registeredSocialServices = new ArrayList<RegisteredService>();
		nextUserServiceCounter = 0;
		nextPostServiceCounter = 0;
		nextSocialServiceCounter = 0;
		init();
		checkServices();
	}

	public void init() {
		
		get("/ping", (request,response) -> {
			response.type("application/json");
			response.status(200);
			return "ping passt";
		});
		
		post("/service", (request,response) -> {
			 response.type("application/json");
			
			 JsonElement jsonTree = jsonParser.parse(request.body());
			 JsonObject object = jsonTree.getAsJsonObject();
			 String type = object.get("type").getAsString();
			 String ip = object.get("ip").getAsString();
			 int port = object.get("port").getAsInt();
			 
			 if(type.equals("user")){
				 registeredUserServices.add(new RegisteredService(ip, port));
			 }
			 else if(type.equals("post")) {
				 registeredPostServices.add(new RegisteredService(ip, port));
			 }
			 else if(type.equals("social")) {
				 registeredSocialServices.add(new RegisteredService(ip, port));
			 }
			 else {
				 response.status(400);
				 return "bad request";
			 }
			 
			 System.out.println("Service mit Typ: " + type + " registriert " + ip + ":" + port);
			 response.status(200);
			 return "registered " + type + " service at " + ip + ":" + port;
		});
		
		Runnable pingRunnable = new Runnable() {
		    public void run() {
		    	checkServices();
		    }
		};
		
		ScheduledExecutorService exec = Executors.newScheduledThreadPool(1);
		exec.scheduleAtFixedRate(pingRunnable , 0, 1, TimeUnit.MINUTES);
		
	}
	
	public void checkServices(){
		
		//user
		/*
		for(RegisteredService rs : registeredUserServices) {
			String urlString = rs.getFullIp() + "/ping";
			try {
				URL url = new URL(urlString);
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setRequestMethod("GET");
				if(con.getResponseCode() != 200) {
					System.out.println("Removing Service " + rs.getFullIp() + " because not responding to ping.");
					registeredUserServices.remove(rs);
				}
			} catch (IOException e) {
				System.out.println(e.getMessage());
			}
		} */
		
		//post
		for(RegisteredService rs : registeredPostServices) {
			String urlString = rs.getFullIp() + "/ping";
			System.out.println(urlString);
			try {
				URL url = new URL(urlString);
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setRequestMethod("GET");
				if(con.getResponseCode() != 200) {
					System.out.println("Removing Service " + rs.getFullIp() + " because not responding to ping.");
					registeredPostServices.remove(rs);
				}
			} catch (IOException e) {
				System.out.println(e.getMessage());
			}
		}
		
		//social
		for(RegisteredService rs : registeredSocialServices) {
			String urlString = rs.getFullIp() + "/ping";
			System.out.println(urlString);
			try {
				URL url = new URL(urlString);
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setRequestMethod("GET");
				if(con.getResponseCode() != 200) {
					System.out.println("Removing Service " + rs.getFullIp() + " because not responding to ping.");
					registeredSocialServices.remove(rs);
				}
			} catch (IOException e) {
				System.out.println(e.getMessage());
			}
		}
		
	}
	
	public List<RegisteredService> getUserServices(){
		return registeredUserServices;
	}
	
	public List<RegisteredService> getPostServices(){
		return registeredPostServices;
	}
	
	public List<RegisteredService> getSocialServices(){
		return registeredSocialServices;
	}
	
	public RegisteredService nextUserService() {
		nextUserServiceCounter++;
		if(nextUserServiceCounter >= registeredUserServices.size()) {
			nextUserServiceCounter = 0;
		}
		return registeredUserServices.get(nextUserServiceCounter);
	}
	
	public RegisteredService nextPostService() {
		System.out.println("nextPostServiceCounter:" + nextPostServiceCounter);
		nextPostServiceCounter++;
		if(nextPostServiceCounter >= registeredPostServices.size()) {
			nextPostServiceCounter = 0;
		}
		System.out.println("nextPostServiceCounter:" + nextPostServiceCounter);
		return registeredPostServices.get(nextPostServiceCounter);
	}
	
	public RegisteredService nextSocialService() {
		nextSocialServiceCounter++;
		if(nextSocialServiceCounter >= registeredSocialServices.size()) {
			nextSocialServiceCounter = 0;
		}
		return registeredSocialServices.get(nextSocialServiceCounter);
	}
}
