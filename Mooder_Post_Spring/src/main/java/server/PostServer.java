package server;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.google.gson.JsonIOException;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

@SpringBootApplication
@EnableWebMvc
public class PostServer {
	
	//private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");

	public static void main(String[] args) {
		SpringApplication.run(PostServer.class, args);
		try {
			registerService();
		} catch (JsonIOException | JsonSyntaxException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	/*
	private static void registerervice() {
		OkHttpClient httpClient = new OkHttpClient();
		String jsonString = "{\"ip\":\"localhost\",\"port\":\"8083\",\"type\":\"post\"}";
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
	*/
	private static void registerService() throws JsonIOException, JsonSyntaxException, IOException {
		String jsonString = "{\"ip\":\"localhost\",\"port\":\"8083\",\"type\":\"post\"}";
		
		URL url = new URL("http://localhost:8081/service");
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setRequestMethod("POST");
		con.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
		con.setRequestProperty("Accept", "application/json");
		con.setDoOutput(true);

        OutputStream os = con.getOutputStream();
        os.write(jsonString.getBytes("UTF-8"));
        os.close();
        
        InputStream inputStream = new BufferedInputStream(con.getInputStream());
        JsonParser jsonParser = new JsonParser();
        
        JsonObject response = (JsonObject)jsonParser.parse(new InputStreamReader(inputStream, "UTF-8"));
	}

}
