package org.glxy.sass.service;

import org.glxy.sass.config.Result;
import org.springframework.stereotype.Service;

@Service
public interface TaskService {


    void scheduleTask(String endTime, String competitionNb);

    Result<?> executeTask(String competitionId);

}