package service;

import com.fasterxml.jackson.databind.ObjectMapper;
import model.PasswordService;
import model.User;
import model.UserDAO;

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
}
