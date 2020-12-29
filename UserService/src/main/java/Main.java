import controller.Controller;

import static spark.Spark.*;

public class Main {

    public static void main(String[] args) {
        post("/register", Controller::createUser);
        post("/login", Controller::loginUser);
        get("/user", Controller::token);
        patch("/user", Controller::updateUser);
        delete("/user", Controller::deleteUser);
    }
}
