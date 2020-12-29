package server;

import java.io.IOException;
import java.net.http.HttpClient;

import java.util.List;

import javax.websocket.OnError;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.google.gson.Gson;
import com.squareup.okhttp.*;


import data.Post;
@RestController
public class PostController {
	private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
	public static PostDao postDao;
	public static Post post;
	private HttpClient httpClient;
	
	public PostController() {
		httpClient = HttpClient.newHttpClient();
		postDao = new PostDao();
		post=new Post();
	}
	@GetMapping("/getAllPosts")
	public List<Post> GetPosts() {
		 return postDao.getAllPosts();
	}
	@GetMapping("/getAllPostsofone/{userid}")
	public List<Post> GetPostsofone(@PathVariable("userid") String userid) throws JsonProcessingException {
		 return postDao.getAllPostsofOne(userid);
	}
	@GetMapping("/getAllPostsofsome/{userids}")
	public List<Post> GetPostsofone(@RequestParam(required=false) List<String> userids){
		 return postDao.getAllPostsofSome(userids);
	}
	@PostMapping("/postpost")
	 public void create(@RequestBody Post post) {
	  postDao.addPost(post);
	 }
	private static void createPost() {
		OkHttpClient httpClient = new OkHttpClient();
		String jsonString = "{\"ip\":\"localhost\",\"port\":\"8083\",\"type\":\"post\"}";
		RequestBody body = RequestBody.create(JSON, jsonString);
        Request request = new Request.Builder()
            .url("http://localhost:1234/service")
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
