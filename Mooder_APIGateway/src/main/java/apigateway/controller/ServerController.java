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
		postController = new PostController();
		socialController = new SocialController(serviceController, userController, postController);
		postController.setServiceController(serviceController);
		postController.setSocialController(socialController);
		postController.setUserController(userController);
	}
	
}
