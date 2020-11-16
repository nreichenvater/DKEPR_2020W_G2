package model;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class UserDAO implements DAO<User> {

    private static final String CONNECTION_URL = "jdbc:oracle:thin:@localhost:1521:XE";
    private static final String USERNAME = "SYSTEM";
    private static final String PASSWORD = "admin";
    private static Connection con;

    public UserDAO() {
        try {
            con = DriverManager.getConnection(CONNECTION_URL, USERNAME, PASSWORD);
            con.setAutoCommit(false);
        } catch (SQLException e) {
            System.out.println("Connection failed");
            e.printStackTrace();
        }
    }

    @Override
    public Optional<User> get(String key) {
        String SELECT = "SELECT * FROM user_dke WHERE nickname = ?;";
        User user = new User();
        try (PreparedStatement stmt = con.prepareStatement(SELECT)) {
            stmt.setString(1, key);
            ResultSet result = stmt.executeQuery();
            if(!result.next()) return Optional.empty();
            user = new User(result.getString("nickname"), result.getString("first_name"), result.getString("last_name"), result.getString("email"), result.getString("password"), result.getBlob("portrait"), result.getDate("birthday"), (char)result.getObject("sex"));
        } catch (Exception e) {
            System.out.println("SQL Exception: During read transaction");
            e.printStackTrace();
        }
        return Optional.of(user);
    }

    @Override
    public List<User> getAll() {
        String SELECT = "SELECT * FROM user_dke;";
        List<User> list = new ArrayList<>();
        try(Statement stmt = con.createStatement()) {
            ResultSet result = stmt.executeQuery(SELECT);
            while(result.next())  {
                list.add(new User(result.getString("nickname"), result.getString("first_name"), result.getString("last_name"), result.getString("email"), result.getString("password"), result.getBlob("portrait"), result.getDate("birthday"), (char)result.getObject("sex")));
            }
        }  catch (Exception e) {
            System.out.println("SQL Exception: During read transaction");
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public void save(User user) throws SQLException {
        try (PreparedStatement preparedStatement = con.prepareStatement("INSERT INTO USER_DKE(nickname, first_name, last_name, email, password, PORTRAIT, BIRTHDAY, SEX) VALUES(?, ?, ?, ?, ?, ?, ?, ?)")) {
            if(user.getNickname() == null) throw new NullPointerException("Nickname can't be NULL");
            else preparedStatement.setString(1, user.getNickname());
            if(user.getFirst_name() == null) preparedStatement.setNull(2, Types.VARCHAR);
            else preparedStatement.setString(2, user.getFirst_name());;
            if(user.getLast_name() == null) preparedStatement.setNull(3, Types.VARCHAR);
            else preparedStatement.setString(3, user.getLast_name());
            if(user.getEmail() == null) throw new NullPointerException("Email can't be NULL");
            else preparedStatement.setString(4, user.getEmail());
            if(user.getPassword() == null) throw new NullPointerException("Password can't be NULL");
            else preparedStatement.setString(5, user.getPassword());
            if(user.getPortrait() == null) preparedStatement.setNull(6, Types.BLOB);
            else preparedStatement.setBlob(6, user.getPortrait());
            if(user.getBirthdate() == null) preparedStatement.setNull(7, Types.DATE);
            else preparedStatement.setDate(7, user.getBirthdate());
            if(user.getSex() == null) preparedStatement.setNull(8, Types.CHAR);
            else preparedStatement.setObject(8, user.getSex());
            preparedStatement.executeQuery();
            con.commit();
        } catch (Exception sql) {
            System.out.println("SQL Exception: During insertion transaction");
            sql.printStackTrace();
            try {
                con.rollback();
            } catch (SQLException e) {
                System.out.println("SQL Exception: During rollback transaction");
                e.printStackTrace();
            }
        }
    }

    @Override
    public void update(User user) {

    }

    @Override
    public void delete(String key) {
        String DELETE = "DELETE FROM user_dke WHERE nickname = ?;";
        try {
            PreparedStatement stmt = con.prepareStatement(DELETE);
            stmt.setString(1, key);
            stmt.executeQuery();
            con.commit();
        } catch (SQLException sql) {
            System.out.println("SQL Exception: During delete transaction");
            sql.printStackTrace();
            try {
                con.rollback();
            } catch (SQLException e) {
                System.out.println("SQL Exception: During rollback transaction");
                e.printStackTrace();
            }
        }
    }
}
