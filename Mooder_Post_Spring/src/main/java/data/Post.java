package data;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;

@Entity
public class Post {
	@Id
	public ObjectId _id;
	public String userid;
	public String post;
	public String mood;
	public Timestamp timestamp;
	public ArrayList<String> hashtags; 
	
	
	public Post() {
		
	}
	public Post(String userid, String post, String mood, Timestamp timestamp, ArrayList<String> hashtags) {
		super();
		this.userid = userid;
		this.post = post;
		this.mood = mood;
		this.timestamp = Timestamp.from(Instant.now());
		this.hashtags = hashtags;
	}

	public ObjectId get_id() {
		return _id;
	}

	public void set_id(ObjectId  _id) {
		this._id = _id;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getPost() {
		return post;
	}

	public void setPost(String post) {
		this.post = post;
	}

	public String getMood() {
		return mood;
	}

	public void setMood(String mood) {
		this.mood = mood;
	}

	public Timestamp getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}

	public ArrayList<String> getHashtags() {
		return hashtags;
	}

	public void setHashtags(ArrayList<String> hashtags) {
		this.hashtags = hashtags;
	}
}
