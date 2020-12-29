package server;

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

import data.Post;
@RestController
public class PostController {
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
	
}