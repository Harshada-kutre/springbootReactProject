package com.UserLoginApp.UserLogin.Controller;

import com.UserLoginApp.UserLogin.Exception.UserNotFoundException;
import com.UserLoginApp.UserLogin.Model.User;
import com.UserLoginApp.UserLogin.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
    @GetMapping("/displayUsers")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/displayUsers/{id}")
    User getUserById(@PathVariable Integer id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }


}
