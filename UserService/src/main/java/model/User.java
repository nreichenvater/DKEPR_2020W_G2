package model;

import java.sql.Blob;
import java.sql.Date;
import java.util.Objects;

public class User {

    /**
     * User-Class
     *
     * create table USER_DKE
     * (
     *     NICKNAME VARCHAR2(100) not null primary key,
     *     FIRST_NAME VARCHAR2(50),
     *     LAST_NAME VARCHAR2(50),
     *     EMAIL VARCHAR2(100) not null unique,
     *     PASSWORD VARCHAR2(30) not null,
     *     PORTRAIT BLOB,
     *     BIRTHDAY DATE,
     *     SEX CHAR
     *     check (sex in ('m', 'f', 's'))
     * )
     */

    private String nickname;
    private String first_name;
    private String last_name;
    private String email;
    private String password;
    private Blob portrait;
    private Date birthdate;
    private Character sex;

    public User(String nickname, String first_name, String last_name, String email, String password, Blob portrait, Date birthdate, Character sex) {
        this.nickname = nickname;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.portrait = portrait;
        this.birthdate = birthdate;
        this.sex = sex;
    }

    public User() {
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Blob getPortrait() {
        return portrait;
    }

    public void setPortrait(Blob portrait) {
        this.portrait = portrait;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public Character getSex() {
        return sex;
    }

    public void setSex(Character sex) {
        this.sex = sex;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return sex == user.sex &&
                Objects.equals(nickname, user.nickname) &&
                Objects.equals(first_name, user.first_name) &&
                Objects.equals(last_name, user.last_name) &&
                Objects.equals(email, user.email) &&
                Objects.equals(password, user.password) &&
                Objects.equals(portrait, user.portrait) &&
                Objects.equals(birthdate, user.birthdate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nickname, first_name, last_name, email, password, portrait, birthdate, sex);
    }

    @Override
    public String toString() {
        return "User{" +
                "nickname='" + nickname + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", portrait=" + portrait +
                ", birthdate=" + birthdate +
                ", sex=" + sex +
                '}';
    }
}