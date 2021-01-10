package org.jku.dkeuserservice.repository;

import org.jku.dkeuserservice.model.UserDAO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserDAO, String> {
    UserDAO findByUsername(String username);
}
