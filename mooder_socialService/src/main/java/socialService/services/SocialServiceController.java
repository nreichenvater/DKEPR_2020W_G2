package socialService.services;

import org.neo4j.dbms.api.*;
import java.io.File;
import org.neo4j.driver.*;

import socialService.dao.SocialServiceUserDao;;

public class SocialServiceController {
	
	private final Driver driver;
	private final SocialServiceUserDao socialServiceUserDao;
	private final SocialServiceEndpoint socialServiceEndpoint;
	
	public SocialServiceController() {
		
		driver = GraphDatabase.driver("bolt://localhost:7687", AuthTokens.basic("neo4j", "admin"));
		socialServiceUserDao = new SocialServiceUserDao(driver);
		socialServiceEndpoint = new SocialServiceEndpoint(socialServiceUserDao);
		
	}
	
	
}
