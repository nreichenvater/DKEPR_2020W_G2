package org.jku.dkeuserservice.service;

import org.jku.dkeuserservice.exceptions.UserAlreadyExistAuthenticationException;
import org.jku.dkeuserservice.model.UserDTO;
import org.jku.dkeuserservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.jku.dkeuserservice.model.UserDAO;

import javax.naming.AuthenticationException;
import java.util.Arrays;
import java.util.List;

@Service
public class UserService implements UserDetailsService {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;


    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        List<SimpleGrantedAuthority> roles = null;
        UserDAO user = userRepository.findByUsername(s);
        if (user != null) {
            roles = Arrays.asList(new SimpleGrantedAuthority(user.getRole()));
            return new User(user.getUsername(), user.getPassword(), roles);
        }
        throw new UsernameNotFoundException("User not found with the name " + s);
    }

    public UserDAO save(UserDTO user) throws AuthenticationException {
        if(userRepository.existsById(user.getUsername())) throw new UserAlreadyExistAuthenticationException("User with the name " + user.getUsername() + " already exists");
        if(!user.getPassword().equals(user.getRepeatedPassword())) throw new AuthenticationException("Password and RepeatedPassword do not match");
        UserDAO newUser = new UserDAO();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        newUser.setRole(user.getRole());
        return userRepository.save(newUser);
    }

    public UserDAO update(UserDTO user) {
        UserDAO userToUpdate = userRepository.getOne(user.getUsername());
        if(userToUpdate.getUsername() != null){
            userToUpdate.setPassword(bcryptEncoder.encode(user.getPassword()));
            //userToUpdate.setEmail(user.getEmail());
            //userToUpdate.setFirst_name(user.getFirst_name());
            //userToUpdate.setLast_name(user.getLast_name());
            return userRepository.save(userToUpdate);
        }
        throw new UsernameNotFoundException("User not found with the name " + user.getUsername());
    }

    public UserDAO delete(String username) {
        UserDAO userToDelete = userRepository.findByUsername(username);
        if(userToDelete != null) {
            userRepository.deleteById(username);
            return userToDelete;
        }
        throw new UsernameNotFoundException("User not found with the name " + username);
    }
}