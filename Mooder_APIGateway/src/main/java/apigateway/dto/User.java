package apigateway.dto;

public class User {
	
	private String username;
	private boolean followed;
	
	public User(String username, boolean followed) {
		this.username = username;
		this.followed = followed;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public boolean isFollowed() {
		return followed;
	}

	public void setFollowed(boolean followed) {
		this.followed = followed;
	}

}
