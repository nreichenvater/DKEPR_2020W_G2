package org.jku.dkeuserservice.model;

public class UserDTO {

    private String username;
    private String password;
    private String repeatedPassword;
    //private String email;
    //private String role;
    //private String first_name;
    //private String last_name;

    //public String getEmail() {
        //return email;
    //}

    //public void setEmail(String email) {
        //this.email = email;
    //}

    //public String getFirst_name() {
        //return first_name;
    //}

    //public void setFirst_name(String first_name) {
        //this.first_name = first_name;
    //}

    public String getRepeatedPassword() {
        return repeatedPassword;
    }

    public void setRepeatedPassword(String repeatedPassword) {
        this.repeatedPassword = repeatedPassword;
    }

    //public String getLast_name() {
        //return last_name;
    //}

    //public void setLast_name(String last_name) {
        //this.last_name = last_name;
    //}

    //public String getRole() {
        //return role;
    //}

    //public void setRole(String role) {
        //this.role = role;
    //}

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
