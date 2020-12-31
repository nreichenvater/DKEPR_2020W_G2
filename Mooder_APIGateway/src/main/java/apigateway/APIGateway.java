package apigateway;

import static spark.Spark.before;
import static spark.Spark.options;

import apigateway.controller.ServerController;

public class APIGateway {

	public static void main(String[] args) {
		new ServerController();
		
		options("/*",
		        (request, response) -> {

		            String accessControlRequestHeaders = request
		                    .headers("Access-Control-Request-Headers");
		            if (accessControlRequestHeaders != null) {
		                response.header("Access-Control-Allow-Headers",
		                        accessControlRequestHeaders);
		            }

		            String accessControlRequestMethod = request
		                    .headers("Access-Control-Request-Method");
		            if (accessControlRequestMethod != null) {
		                response.header("Access-Control-Allow-Methods",
		                        accessControlRequestMethod);
		            }

		            return "OK";
		        });
		
		before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));
	}

}
