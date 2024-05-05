package org.glxy.sass.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@TableName("`group`")
@ApiModel(value = "Group", description = "用户分组信息表")
public class Group {

    @ApiModelProperty(value = "分组id（自增）", example = "1")
    @TableId(value = "group_id", type = IdType.AUTO)
    private Integer groupId;

    @ApiModelProperty(value = "比赛名称", example = "男子100米")
    private String competitionNe;

    @ApiModelProperty(value = "用户姓名", example = "张三")
    private String usersName;

    @ApiModelProperty(value = "用户性别，例如：2未知，0男，1女", example = "0")
    private String usersSex;

    @ApiModelProperty(value = "学院名称", example = "计算机科学与技术学院")
    private String collegeName;

    @ApiModelProperty(value = "分组标签，例如：A组", example = "A")
    private String groupLabel;

    @ApiModelProperty(value = "组内序号，例如：1", example = "1")
    private String groupIndex;
}
