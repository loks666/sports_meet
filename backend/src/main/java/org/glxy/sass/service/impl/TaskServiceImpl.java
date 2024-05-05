package org.glxy.sass.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import org.glxy.sass.config.Result;
import org.glxy.sass.entity.Enroll;
import org.glxy.sass.entity.Group;
import org.glxy.sass.service.EnrollService;
import org.glxy.sass.service.GroupService;
import org.glxy.sass.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskScheduler taskScheduler;

    public void scheduleTask(String endTime, String competitionId) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try {
            Date endDateTime = dateFormat.parse(endTime);
            Date startAt = new Date(endDateTime.getTime() + 5000);
            taskScheduler.schedule(() -> executeTask(competitionId), startAt);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    @Autowired
    private EnrollService enrollService;

    @Autowired
    private GroupService groupService;

    public Result<?> executeTask(String competitionId) {
        List<Enroll> enrolls = enrollService.list(new LambdaQueryWrapper<Enroll>().eq(Enroll::getCompetitionNb, competitionId));

        AtomicInteger groupCounter = new AtomicInteger(0);  // 用于计数并分组
        AtomicInteger indexInGroup = new AtomicInteger(1);  // 用于在组内分配序号

        List<Group> groups = enrolls.stream()
                .map(enroll -> {
                    if (indexInGroup.get() > 5) {  // 如果当前组已满5人，移动到下一个组
                        groupCounter.incrementAndGet();
                        indexInGroup.set(1);  // 重置组内索引为1
                    }
                    Group group = new Group();
                    group.setCompetitionNe(enroll.getCompetitionNb());
                    group.setCollegeName(enroll.getCollegeName());
                    group.setGroupLabel(String.valueOf((char) ('A' + groupCounter.get())));
                    group.setUsersName(enroll.getUsersName());
                    group.setUsersSex(enroll.getUsersSex() == 0 ? "男" : "女");
                    group.setGroupIndex(String.valueOf(indexInGroup.getAndIncrement()));  // 设置组内序号并递增
                    return group;
                })
                .collect(Collectors.toList());

        boolean result = groupService.saveBatch(groups);
        String msg = "id:" + competitionId + " 的比赛，自动分组插入%s！";
        if (result) {
            String success = String.format(msg, "成功");
            System.out.println(success);
            return Result.success(success);
        } else {
            String failed = String.format(msg, "失败");
            System.out.println(failed);
            return Result.error(failed);
        }
    }


}