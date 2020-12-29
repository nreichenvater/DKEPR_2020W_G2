package socialService.services;

import org.neo4j.dbms.api.*;
import java.io.File;
import java.io.IOException;

import org.neo4j.driver.*;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

import socialService.dao.SocialServiceUserDao;
import spark.Spark;;

public class SocialServiceController {
	
	private final Driver driver;
	private final SocialServiceUserDao socialServiceUserDao;
	private final SocialServiceEndpoint socialServiceEndpoint;
	private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
	
	public SocialServiceController() {
		Spark.port(8082);
		driver = GraphDatabase.driver("bolt://localhost:7687", AuthTokens.basic("neo4j", "admin"));
		socialServiceUserDao = new SocialServiceUserDao(driver);
		socialServiceEndpoint = new SocialServiceEndpoint(socialServiceUserDao);
		registerService();
		
	}
	
	public void registerService() {
		OkHttpClient httpClient = new OkHttpClient();
		String jsonString = "{\"ip\":\"localhost\",\"port\":\"8082\",\"type\":\"social\"}";
		RequestBody body = RequestBody.create(JSON, jsonString);
		
		Request request = new Request.Builder()
	            .url("http://localhost:8081/service")
	            .post(body)
	            .build();
		
		Response response;
		try {
			response = httpClient.newCall(request).execute();
		} catch (IOException e) {
			System.out.println("geht ned");
		}
		
	}
	
	
}
