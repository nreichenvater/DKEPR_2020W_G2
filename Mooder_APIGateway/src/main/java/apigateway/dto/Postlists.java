package apigateway.dto;

import java.util.List;


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
	
	public String toString() {
		return postlist.toString() + postlist2.toString();
	}
}
