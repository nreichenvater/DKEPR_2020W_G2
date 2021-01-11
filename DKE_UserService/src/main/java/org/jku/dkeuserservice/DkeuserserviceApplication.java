package org.jku.dkeuserservice;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

@SpringBootApplication
public class DkeuserserviceApplication {
	
	private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");

    public static void main(String[] args) {
        SpringApplication.run(DkeuserserviceApplication.class, args);
        registerService();
    }
    
    public static void registerService() {
		OkHttpClient httpClient = new OkHttpClient();
		String jsonString = "{\"ip\":\"localhost\",\"port\":\"8084\",\"type\":\"user\"}";
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
