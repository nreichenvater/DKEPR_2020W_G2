package server;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Criteria;
import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.query.UpdateOperations;
import org.springframework.expression.spel.ast.Selection;
import com.mongodb.MongoClient;
import data.Post;
import data.Postlists;
public class PostDao {
	MongoClient client = new MongoClient("localhost", 27017); //connect to mongodb
	Datastore datastore = new Morphia().createDatastore(client, "PostServer");
	public String addPost(Post post){
		datastore.save(post);
		return "post added";
	}
	public String deletePost(Post post) {
		datastore.delete(post);
		return "post deleted";
	}
	public List<Post> getAllPosts(){
		List<Post> posts = datastore.find(Post.class).asList();
		System.out.println(posts.size());
		if (posts!=null) {
			return posts;
		}
		return null;
	}
	public List<Post> getAllPostsofOne(String user) {
		Query<Post> query=datastore.find(Post.class);
		query.criteria("userid").equal(user);
		return query.asList();
	}
	public String updatePost(ObjectId _id, String txt) {
		Query<Post> query = datastore.createQuery(Post.class).field("_id").equal("_id");
		UpdateOperations<Post> post = datastore.createUpdateOperations(Post.class).set("status", "active");

		datastore.update(query, post);
		return "Update successfull";

	}
	public List<Post> getAllPostsofSome(List<String> users) {
		List<Post> res = new ArrayList<Post>();
		for(String i : users) {
			res.addAll(filterPosts(datastore.find(Post.class),i));
		}
		return res;
	}
	
	public List<Post> filterPosts(Query<Post> query, String user){
		query.criteria("userid").equal(user);
		return query.asList();
	}
	
	public Post filterOnePost(Query<Post> query, String user){
		query.order("-_id").criteria("userid").equal(user);
		Post post=query.get();
		return post;
	}
	public List<Post> filterOtherPosts(Query<Post> query, String user){
		query.order("-_id").criteria("userid").equal(user);
		List<Post> test = new ArrayList<Post>();
		test=query.asList();
		if(test.size() > 0) {
			test.remove(0);
		}
		return test;
	}
	public Postlists getonePostofSome(List<String> users) {
		List<Post> res1 = new ArrayList<Post>();
		List<Post> res2 = new ArrayList<Post>();
		for(String i : users) {
			Post p = filterOnePost(datastore.find(Post.class),i);
			if(p != null) {
				res1.add(p);
			}
		}
		for(String i : users) {
			List<Post> p = filterOtherPosts(datastore.find(Post.class),i);
			if(p.size() > 0) {
				res2.addAll(p);
			}
		}
		Postlists postlists=new Postlists(res1,res2);
		return postlists;
	}
	
}
