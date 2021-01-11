package org.jku.dkeuserservice.model;

public class AuthResponse {

    private String token;
    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public AuthResponse() {

    }

    public AuthResponse(String token, String username) {
        super();
        this.token = token;
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}