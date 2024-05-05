package org.glxy.sass.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.glxy.sass.config.Result;
import org.glxy.sass.entity.Group;
import org.glxy.sass.mapper.GroupMapper;
import org.glxy.sass.service.GroupService;
import org.glxy.sass.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroupServiceImpl extends ServiceImpl<GroupMapper, Group> implements GroupService {
    @Autowired
    private TaskService taskService;

    @Override
    public Result<?> group() {
        return taskService.executeTask("glxy100005");
    }

}
