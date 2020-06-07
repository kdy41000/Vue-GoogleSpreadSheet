package com.springvue.prectice.mapper;

import com.springvue.prectice.vo.UserDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {

    @Select(" SELECT * FROM USERS ")
    public List<UserDto> selectList();
}
