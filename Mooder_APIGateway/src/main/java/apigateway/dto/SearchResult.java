package apigateway.dto;

import java.util.ArrayList;
import java.util.List;

public class SearchResult {
	
	private List<User> searchResultUsers;
	private List<Post> searchResultPosts;
	
	public SearchResult() {
		searchResultUsers = new ArrayList<User>();
		searchResultPosts = new ArrayList<Post>();
	}
	
	public List<User> getSearchResultUsers() {
		return searchResultUsers;
	}
	public void setSearchResultUsers(List<User> searchResultUsers) {
		this.searchResultUsers = searchResultUsers;
	}
	public List<Post> getSearchResultPosts() {
		return searchResultPosts;
	}
	public void setSearchResultPosts(List<Post> searchResultPosts) {
		this.searchResultPosts = searchResultPosts;
	}

}
