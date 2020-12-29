package server;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;

import data.Post;
@RestController
public class PostController {
	
	public static PostDao postDao;
	public static Post post;
	
	public PostController() {
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
	@PostMapping("/post")
	 public void create(@RequestBody Post post) {
	  postDao.addPost(post);
	 }
	
	@GetMapping("/ping") 
	public String ping() {
		return "gepingt";
	}
	
}
