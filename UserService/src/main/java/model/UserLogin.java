package model;

public class UserLogin {

    private String nickname;
    private String password;

    public UserLogin(String nickname, String password) {
        this.nickname = nickname;
        this.password = password;
    }

    public UserLogin() {
    }

    public String getNickname() {
        return nickname;
    }

    public String getPassword() {
        return password;
    }
}
