package socialService.dao;

import java.util.ArrayList;
import java.util.List;

import org.neo4j.driver.Driver;
import org.neo4j.driver.Record;
import org.neo4j.driver.Result;
import org.neo4j.driver.Session;
import org.neo4j.driver.Transaction;
import org.neo4j.driver.TransactionWork;
import org.neo4j.driver.exceptions.NoSuchRecordException;

import static org.neo4j.driver.Values.parameters;

import socialService.data.User;

public class SocialServiceUserDao {

	private Session session;
	
	public SocialServiceUserDao(Driver driver) {
		session = driver.session();
	}
	
	public List<User> getUsers(){
		List<User> resultList = new ArrayList<User>();
		resultList = session.readTransaction(new TransactionWork<List<User>>()
		{			
			@Override
			public List<User> execute(Transaction tx){
				List<User> userList = new ArrayList<User>();
				Result res = tx.run("MATCH(n:User)\r\n" + 
						"OPTIONAL MATCH (n)-[r:follows]->(c:User)\r\n" + 
						"RETURN n.userId as userId, n.name as name, collect(c.userId) as follows");
				while(res.hasNext()) {
					Record r = res.next();
					String userId = r.get("userId").asString();
					String name = r.get("name").asString();
					List relations = r.get("follows").asList();
					ArrayList<String> follows = new ArrayList<String>();
					for(Object relation : relations) {
						follows.add(relation.toString());
					}
					userList.add(new User(userId,name,follows));
				}
				return userList;
			}
			
		});
		return resultList;
	}
	
	public User getUser(String userId) {
		User resultUser = new User();
		
		resultUser = session.readTransaction(new TransactionWork<User>()
		{			
			@Override
			public User execute(Transaction tx){
				Result res = tx.run("MATCH (n:User) WHERE n.userId=$userId\r\n" + 
						"OPTIONAL MATCH (n)-[r:follows]->(c:User)\r\n" + 
						"RETURN n.userId as userId,n.name as name ,collect(c.userId) as follows", parameters("userId",userId));
				Record r = res.single();
				String userId = r.get("userId").asString();
				String name = r.get("name").asString();
				List relations = r.get("follows").asList();
				ArrayList<String> follows = new ArrayList<String>();
				for(Object relation : relations) {
					follows.add(relation.toString());
				}
				
				return new User(userId, name, follows);
			}
			
		});
		
		return resultUser;
	}
	
	public void register(User user) throws NoSuchRecordException{
		session.writeTransaction(new TransactionWork<Record>()
		{
			@Override
			public Record execute(Transaction tx) {
				Result res = tx.run("CREATE (n:User {userId:$userId, name:$name}) RETURN n", parameters("userId",user.getUserId(),"name",user.getName()));
				Record r = res.single();
				return r;
			}
		});
		System.out.println("User erfolgreich registriert!");
	}
	
	public void follow(String callingUserId, String followUserId) throws NoSuchRecordException{
		session.writeTransaction(new TransactionWork<Record>()
		{
			@Override
			public Record execute(Transaction tx) {
				Result res = tx.run("MATCH (a:User),(b:User)\r\n" + 
						"WHERE a.userId = $callingUserId AND b.userId = $followUserId\r\n" + 
						"CREATE (a)-[r:follows]->(b)\r\n" + 
						"RETURN type(r)", parameters("callingUserId",callingUserId,"followUserId",followUserId));
				Record r = res.single();
				return r;
			}
		});
		System.out.println(callingUserId + " folgt nun "+ followUserId);
	}
	
	public void unfollow(String callingUserId, String unfollowUserId) {
		System.out.println(callingUserId + ", "+ unfollowUserId);
		session.writeTransaction(new TransactionWork<String>()
		{
			@Override
			public String execute(Transaction tx) {
				Result res = tx.run("MATCH (a:User{userId:$callingUserId})-[r:follows]->(b:User{userId:$unfollowUserId})\r\n" + 
						"Delete r", parameters("callingUserId",callingUserId,"unfollowUserId",unfollowUserId));
				return "Success";
			}
		});
		System.out.println(callingUserId + " folgt nun "+ unfollowUserId + " nicht mehr");
	}
	
}
