package model;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public interface DAO<T> {

    Optional<T> get(String key) throws SQLException;

    List<T> getAll() throws SQLException;

    void save(T t) throws SQLException;

    void update(T t);

    void delete(String key);

}
