package apigateway.controller;

import spark.Spark;

public class ServerController {
	
	private ServiceController serviceController;
	private UserController userController;
	private PostController postController;
	private SocialController socialController;
	
	public ServerController() {
		Spark.port(8081);
		serviceController = new ServiceController();
		userController = new UserController(serviceController);
		socialController = new SocialController(serviceController, userController);
		new PostController(serviceController, userController, socialController);
	}
	
}
