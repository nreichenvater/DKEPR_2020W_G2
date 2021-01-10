package server;

import java.sql.Timestamp;

import java.time.Instant;
import java.util.List;

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
	
	public PostController() {
		postDao = new PostDao();
		post=new Post();
	}
	@GetMapping("/posts")
	public List<Post> GetPosts() {
		System.out.println("get posts");
		 return postDao.getAllPosts();
	}
	@GetMapping("/getAllPostsofone/{userid}")
	public List<Post> GetPostsofone(@PathVariable("userid") String userid) throws JsonProcessingException {
		 return postDao.getAllPostsofOne(userid);
	}
	
	@PostMapping("/post")
	 public void create(@RequestBody Post post) {
	  post.setTimestamp(Timestamp.from(Instant.now()));
	  postDao.addPost(post);
	 }
	
	@PostMapping("/feed")
	public String getfeed(@RequestBody List<String> users) {
		return new Gson().toJson(postDao.getAllPostsofSome(users));
	}
	@PostMapping("/recent")
	public String getfeedofone(@RequestBody List<String> users) {
		return new Gson().toJson(postDao.getonePostofSome(users));
	}
	
	@GetMapping("/ping") 
	public String ping() {
		return "gepingt";
	}
	
}
