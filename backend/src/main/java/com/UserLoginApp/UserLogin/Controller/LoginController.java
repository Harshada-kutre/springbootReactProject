package com.UserLoginApp.UserLogin.Controller;

import com.UserLoginApp.UserLogin.Model.Login;
import com.UserLoginApp.UserLogin.Repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class LoginController {
    @Autowired
    private LoginRepository loginRepository;

    @GetMapping("/userLogin")
    List<Login> getAllAdmins(){
        return loginRepository.findAll();
    }
}
