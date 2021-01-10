package data;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;

public class Postlists {
	public List<Post> postlist;
	public List<Post> postlist2;
	
	public Postlists() {
		
	}
	public Postlists(List<Post> postlist, List<Post> postlist2) {
		this.postlist=postlist;
		this.postlist2=postlist2;
	}
	public List<Post> getPostlist() {
		return this.postlist;
	}

	public void setPostlist(List<Post> postlist) {
		this.postlist = postlist;
	}
	public List<Post> getPostlist2() {
		return this.postlist2;
	}

	public void setPostlist2(List<Post> postlist2) {
		this.postlist2 = postlist2;
	}
}
