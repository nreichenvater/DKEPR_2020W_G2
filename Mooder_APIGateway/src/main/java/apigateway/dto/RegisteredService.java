package apigateway.dto;

public class RegisteredService {
	
	private String ip;
	private int port;
	private String fullIp;
	
	public RegisteredService(String ip, int port) {
		this.ip = ip;
		this.port = port;
		fullIp = "http://" + ip + ":" + port;
	}

	public String getIp() {
		return ip;
	}

	public int getPort() {
		return port;
	}
	
	public String getFullIp() {
		return fullIp;
	}

}
