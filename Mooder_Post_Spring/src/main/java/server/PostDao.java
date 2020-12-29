package server;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.query.UpdateOperations;
import org.springframework.expression.spel.ast.Selection;
import com.mongodb.MongoClient;
import data.Post;
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
		Query<Post> query=datastore.find(Post.class);
		for(String i:users) {
			query.or(
				query.criteria("userid").equal(i)
			);
		}
		return query.asList();
	}
	
}
