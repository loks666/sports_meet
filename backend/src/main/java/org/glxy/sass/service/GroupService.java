package org.glxy.sass.service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.glxy.sass.config.Result;
import org.glxy.sass.entity.Group;

public interface GroupService extends IService<Group> {

    Result<?> group();
}
