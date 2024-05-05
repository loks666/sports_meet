package org.glxy.sass.config;

import lombok.Getter;
import lombok.Setter;

/**
 * 泛型响应实体类，用于API响应结果的封装。
 *
 * @param <T> 响应数据的类型
 */
@Getter
@Setter
public class Result<T> {

    private String code;
    private String msg;
    private T data;

    // 默认构造函数
    public Result() {
    }

    // 带数据的构造函数，同时设置成功的默认状态
    public Result(String code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    /**
     * 创建一个没有具体数据的成功响应。
     *
     * @return 返回不包含数据的成功结果
     */
    public static <T> Result<T> success() {
        return new Result<>("200", "成功", null);
    }

    /**
     * 创建一个包含数据的成功响应。
     *
     * @param data 包含的数据
     * @return 返回包含数据的成功结果
     */
    public static <T> Result<T> success(T data) {
        return new Result<>("200", "成功", data);
    }

    /**
     * 创建一个通用错误响应。
     *
     * @param code 错误代码
     * @param msg 错误消息
     * @return 返回错误结果
     */
    public static <T> Result<T> error(String code, String msg) {
        return new Result<>(code, msg, null);
    }

    /**
     * 创建一个包含数据的错误响应。
     *
     * @param data 错误时附带的数据
     * @return 返回包含数据的错误结果
     */
    public static <T> Result<T> error(T data) {
        return new Result<>("400", "失败", data);
    }
}
