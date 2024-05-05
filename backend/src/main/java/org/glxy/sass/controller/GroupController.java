package org.glxy.sass.controller;

import com.baomidou.mybatisplus.core.toolkit.Assert;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import io.swagger.annotations.Api;
import org.glxy.sass.config.Result;
import org.glxy.sass.entity.Group;
import org.glxy.sass.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "分组管理")
@RestController
@RequestMapping("/group")
public class GroupController {

    @Autowired
    private GroupService groupService;

    /**
     * 分页查询所有分组，基于比赛名称进行搜索
     */
    @GetMapping("/search")
    public Result<?> search(
            @RequestParam(defaultValue = "1") Integer pageNum,
            @RequestParam(defaultValue = "10") Integer pageSize) {
//        LambdaQueryWrapper<Group> wrapper = Wrappers.lambdaQuery();
//        if (StrUtil.isNotBlank(search)) {
//            wrapper.like(Group::getCompetitionNe, search);
//        }
        return Result.success(groupService.page(new Page<>(pageNum, pageSize)));
    }

    /**
     * 通过ID查询单个分组的详细信息。
     */
    @GetMapping("/select")
    public Result<?> select(Group group) {
        System.out.println(group);
        List<Group> list = groupService.list(Wrappers.query(group));
        return Result.success(list);
    }

    /**
     * 新增分组信息。
     */
    @PostMapping("/insert")
    public Result<?> insert(@RequestBody Group group) {
        Assert.notNull(group.getCompetitionNe(),"比赛名称不能为空！");
        boolean saved = groupService.save(group);
        if (!saved) {
            return Result.error("新增失败");
        }
        return Result.success();
    }

    /**
     * 根据ID更新分组信息。
     */
    @PutMapping("/update")
    public Result<?> update(Group group) {
        boolean updated = groupService.updateById(group);
        if (!updated) {
            return Result.error("更新失败");
        }
        return Result.success();
    }

    /**
     * 根据ID删除分组。
     */
    @DeleteMapping("/delete")
    public Result<?> delete(@RequestParam Integer groupId) {
        boolean removed = groupService.removeById(groupId);
        if (!removed) {
            return Result.error("删除失败");
        }
        return Result.success();
    }

    @GetMapping("/groups")
    public Result<?> groups() {
        return groupService.group();
    }
}

