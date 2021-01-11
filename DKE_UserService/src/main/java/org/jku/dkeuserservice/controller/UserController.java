package org.jku.dkeuserservice.controller;

import org.jku.dkeuserservice.model.UserDTO;
import org.jku.dkeuserservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value="/user", method = RequestMethod.PATCH)
    public ResponseEntity<?> updateUser(@RequestBody UserDTO user) throws Exception {
        userService.update(user);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteUser(@RequestBody String username) throws Exception {
        userService.delete(username);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public ResponseEntity<?> getUser(@RequestBody String username) throws Exception {
        return ResponseEntity.ok(userService.loadUserByUsername(username));
    }

}
