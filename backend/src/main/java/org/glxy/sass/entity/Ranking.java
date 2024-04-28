package org.glxy.sass.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("Ranking")
@Data
public class Ranking {


    private String collegeName;

    private Integer rankingIntegral;
}
