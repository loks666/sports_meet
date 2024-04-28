package org.glxy.sass;

import cn.dev33.satoken.SaManager;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SportApplication {

    public static void main(String[] args) {
        SpringApplication.run(SportApplication.class, args);
        System.out.println("启动成功：Sa-Token配置：" + SaManager.getConfig());
    }

}
