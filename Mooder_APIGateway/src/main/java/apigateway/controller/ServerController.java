package apigateway.controller;

public class ServerController {
	
	private ServiceController serviceController;
	private UserController userController;
	private PostController postController;
	private SocialController socialController;
	
	public ServerController() {
		serviceController = new ServiceController();
		userController = new UserController(serviceController);
		socialController = new SocialController(serviceController, userController);
		postController = new PostController(serviceController, userController, socialController);
	}
	
}
