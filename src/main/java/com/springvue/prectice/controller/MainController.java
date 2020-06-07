package com.springvue.prectice.controller;

import com.springvue.prectice.service.UserService;
import com.springvue.prectice.vo.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.util.List;

@Controller
public class MainController {

    @Autowired
    private UserService userservice;

    @GetMapping("/selectlist")
    public ResponseEntity<?> TestMethod() {
        System.out.println("변경 컨트롤러");
        List<UserDto> list = userservice.selectList();
        System.out.println(list.size());


        return ResponseEntity.ok("");

    }

}
