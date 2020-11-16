package controller;

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

}
