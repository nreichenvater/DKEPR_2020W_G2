import controller.Controller;
import static spark.Spark.post;

public class Main {

    public static void main(String[] args) {
        post("/register", Controller::createUser);
    }
}
