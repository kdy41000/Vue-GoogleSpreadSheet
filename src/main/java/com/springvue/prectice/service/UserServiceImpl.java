package com.springvue.prectice.service;

import com.springvue.prectice.mapper.UserMapper;
import com.springvue.prectice.vo.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserMapper usermapper;

    @Override
    public List<UserDto> selectList() {

        return usermapper.selectList();
    }
}
