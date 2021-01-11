package apigateway.dto;

import java.sql.Timestamp;
import java.util.ArrayList;

import org.bson.types.ObjectId;

public class Post {
	
	private ObjectId _id;
	private String userid;
	private String post;
	private String mood;
	private Timestamp timestamp;
	private ArrayList<String> hashtags; 
	
	public Post(String userid, String post, String mood, ArrayList<String> hashtags, ObjectId _id) {
		this.userid = userid;
		this.post = post;
		this.mood = mood;
		//this.timestamp = timestamp;
		this.hashtags = hashtags;
		this._id = _id;
	}
	
	public Post() {
		
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
	
	@Override
	public String toString() {
		return post;
	}
	
}
