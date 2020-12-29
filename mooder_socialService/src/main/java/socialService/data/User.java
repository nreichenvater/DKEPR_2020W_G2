package socialService.data;

import java.util.ArrayList;
import java.util.List;

public class User {

	String userId;
	String name;
	List<String> follows;
	
	public User() {
		
	}
	
	public User(String userId, String name, ArrayList<String> follows) {
		this.userId = userId;
		this.name = name;
		this.follows = follows;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getFollows() {
		return follows;
	}

	public void setFollows(List<String> follows) {
		this.follows = follows;
	}

	
	
	
	
}
