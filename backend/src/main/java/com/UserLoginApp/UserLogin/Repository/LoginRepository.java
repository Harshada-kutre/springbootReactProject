package com.UserLoginApp.UserLogin.Repository;

import com.UserLoginApp.UserLogin.Model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login, Integer> {
}
