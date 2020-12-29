package service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import model.*;
import org.json.JSONObject;

import javax.naming.AuthenticationException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Optional;

public class Service {

    private final UserDAO userDao = new UserDAO();

    public void createUser(String response) {
        ObjectMapper mapper = new ObjectMapper();
        User user = new User();
        String pw;
        try {
            user = mapper.readValue(response, User.class);
            pw = user.getPassword();
            user.setPassword(PasswordService.generatePasswordHash(pw));
            userDao.save(user);
        } catch (Exception e) {
            System.out.println("PasswordServiceError: Hashing the new Password failed");
            e.printStackTrace();
        }
    }

    public void loginUser(String response) {
        ObjectMapper mapper = new ObjectMapper();
        User user = new User();
        UserLogin userLogin = new UserLogin();
        try {
            userLogin = mapper.readValue(response, UserLogin.class);
            Optional<User> opt = userDao.get(userLogin.getNickname());
            if(opt.isEmpty()) throw new NoSuchFieldException();
            else {
                user = opt.get();
                if(PasswordService.validatePassword(userLogin.getPassword(), user.getPassword())) {
                    System.out.println("jwt");
                    //JWTGenerator.createJWT();
                }
                else throw new AuthenticationException();
            }
        } catch (Exception e) {
            System.out.println("PasswordServiceError: Hashing the new Password failed");
            e.printStackTrace();
        }
    }

    public User getUser(String response) {
        JSONObject json = new JSONObject(response);
        String nickname = (String) json.get("nickname");
        Optional<User> user = userDao.get(nickname);
        if(user.isEmpty()) return null;
        return user.get();
    }


    public void deleteUser(String response) {
        JSONObject json = new JSONObject(response);
        String nickname = (String) json.get("nickname");
        userDao.delete(nickname);
    }

    public void updateUser(String response) {
        ObjectMapper mapper = new ObjectMapper();
        String pw;
        try {
            User user = mapper.readValue(response, User.class);
            pw = user.getPassword();
            user.setPassword(PasswordService.generatePasswordHash(pw));
            userDao.update(user);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
