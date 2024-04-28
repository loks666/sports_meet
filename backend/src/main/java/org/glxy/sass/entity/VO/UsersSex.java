package org.glxy.sass.entity.VO;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("UsersSex")
@Data
public class UsersSex {

    private String usersStnumber;

    private String usersPwd;

    private String usersName;

    private int usersSex;

    private String usersPhone;

    private String competitionNb;

    private String collegeName;

    private String sex;
}
