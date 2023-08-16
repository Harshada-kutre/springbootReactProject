package com.UserLoginApp.UserLogin.Services;

import com.UserLoginApp.UserLogin.Model.User;
import com.UserLoginApp.UserLogin.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

public class UserService {
    @Service
    @Transactional
    public class userDetails {

        @Autowired
        private UserRepository userRepository;

        public List<User> listAll() {
            return userRepository.findAll();
        }

        public void save(User product) {
            userRepository.save(product);
        }

        public User get(int id) {
            return userRepository.findById(id).get();
        }

        public void delete(int id) {
            userRepository.deleteById(id);
        }
    }
}
