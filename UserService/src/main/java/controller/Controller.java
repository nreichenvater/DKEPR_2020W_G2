package controller;

import model.User;
import org.eclipse.jetty.http.HttpStatus;
import service.Service;
import spark.Request;
import spark.Response;

public class Controller {

    public static int createUser(Request request, Response response) {
        Service service = new Service();
        service.createUser(request.body());
        return HttpStatus.CREATED_201;
    }

    public static int loginUser(Request request, Response response) {
        Service service = new Service();
        System.out.println(request.body());
        service.loginUser(request.body());
        return HttpStatus.ACCEPTED_202;
    }

    public static String token(Request request, Response response) {
        Service service = new Service();
        User user = service.getUser(request.body());
        return user.toString();
    }

    public static int updateUser(Request request, Response response) {
        Service service = new Service();
        service.updateUser(request.body());
        return HttpStatus.OK_200;
    }

    public static int deleteUser(Request request, Response response) {
        Service service = new Service();
        service.deleteUser(request.body());
        return HttpStatus.OK_200;
    }
}
