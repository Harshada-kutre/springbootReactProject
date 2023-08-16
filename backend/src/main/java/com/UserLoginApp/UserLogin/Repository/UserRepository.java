package com.UserLoginApp.UserLogin.Repository;

import com.UserLoginApp.UserLogin.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
