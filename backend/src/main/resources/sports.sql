/*
 Navicat Premium Data Transfer

 Source Server         : 本机
 Source Server Type    : MySQL
 Source Server Version : 80100 (8.1.0)
 Source Host           : localhost:3306
 Source Schema         : sports

 Target Server Type    : MySQL
 Target Server Version : 80100 (8.1.0)
 File Encoding         : 65001

 Date: 06/05/2024 01:30:52
*/

DROP DATABASE IF EXISTS sports;
CREATE DATABASE sports CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
USE sports;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for applicationform
-- ----------------------------
DROP TABLE IF EXISTS `applicationform`;
CREATE TABLE `applicationform`  (
  `users_stnumber` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户学号',
  `competition_nb` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '比赛编号'
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of applicationform
-- ----------------------------
INSERT INTO `applicationform` VALUES ('201813007111', 'glxy100001');
INSERT INTO `applicationform` VALUES ('201813007111', 'glxy100002');
INSERT INTO `applicationform` VALUES ('201813007111', 'glxy100005');
INSERT INTO `applicationform` VALUES ('201813004001', 'glxy100003');
INSERT INTO `applicationform` VALUES ('201813004001', 'glxy100004');
INSERT INTO `applicationform` VALUES ('201813005207', 'glxy100001');
INSERT INTO `applicationform` VALUES ('201813005207', 'glxy100006');
INSERT INTO `applicationform` VALUES ('201813005207', 'glxy100005');
INSERT INTO `applicationform` VALUES ('201813007206', 'glxy100001');
INSERT INTO `applicationform` VALUES ('201813005203', 'glxy100003');
INSERT INTO `applicationform` VALUES ('201813004001', 'glxy100006');

-- ----------------------------
-- Table structure for college
-- ----------------------------
DROP TABLE IF EXISTS `college`;
CREATE TABLE `college`  (
  `college_number` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '学院编号',
  `college_name` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '学院名称',
  PRIMARY KEY (`college_number`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of college
-- ----------------------------
INSERT INTO `college` VALUES ('glxy101', '理工学院');
INSERT INTO `college` VALUES ('glxy102', '体育与健康学院');
INSERT INTO `college` VALUES ('glxy103', '语言文学学院');
INSERT INTO `college` VALUES ('glxy104', '马克思学院');
INSERT INTO `college` VALUES ('glxy105', '经济与管理学院');
INSERT INTO `college` VALUES ('glxy106', '教育与音乐学院');
INSERT INTO `college` VALUES ('glxy107', '艺术与设计学院');
INSERT INTO `college` VALUES ('glxy108', '商贸与法律学院');
INSERT INTO `college` VALUES ('glxy109', '传媒学院');

-- ----------------------------
-- Table structure for competition
-- ----------------------------
DROP TABLE IF EXISTS `competition`;
CREATE TABLE `competition`  (
  `competition_nb` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '比赛编号',
  `competition_ne` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '比赛名称',
  `competition_site` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '比赛地点',
  `competition_pe` int NOT NULL COMMENT '比赛人数',
  `competition_tnor` int NOT NULL COMMENT '比赛剩余报名人数',
  `competition_start` datetime(6) NOT NULL COMMENT '比赛开始时间',
  `competition_end` datetime(6) NOT NULL COMMENT '比赛结束时间',
  `apply_start` datetime(6) NOT NULL COMMENT '报名开始时间',
  `apply_end` datetime(6) NOT NULL COMMENT '报名结束时间',
  PRIMARY KEY (`competition_nb`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of competition
-- ----------------------------
INSERT INTO `competition` VALUES ('glxy100001', '男子100米米', '田径场A区', 8, 6, '2022-11-01 02:23:41.000000', '2022-11-03 03:23:48.000000', '2022-04-01 01:58:58.000000', '2022-05-01 01:59:09.000000');
INSERT INTO `competition` VALUES ('glxy100002', '男子800米', '田径场B区', 8, 7, '2021-10-28 14:30:21.000000', '2021-11-04 03:30:25.000000', '2021-09-29 13:59:15.000000', '2022-03-01 01:59:21.000000');
INSERT INTO `competition` VALUES ('glxy100003', '女子400米', '田径场B区', 6, 5, '2021-10-22 14:39:34.000000', '2022-09-01 15:39:41.000000', '2021-09-29 13:59:27.000000', '2022-03-01 13:59:34.000000');
INSERT INTO `competition` VALUES ('glxy100004', '女子立定跳远', '田径场D区', 8, 7, '2021-10-27 14:43:11.000000', '2022-05-01 16:43:15.000000', '2021-09-29 13:59:39.000000', '2022-03-01 13:59:44.000000');
INSERT INTO `competition` VALUES ('glxy100005', '男子铅球', '田径场F区', 8, 6, '2021-10-28 14:44:34.000000', '2022-05-01 16:44:36.000000', '2021-09-29 13:59:50.000000', '2022-06-01 13:59:56.000000');
INSERT INTO `competition` VALUES ('glxy100006', '男女混合10000米', '7777', 10, 8, '2021-11-07 12:00:00.000000', '2022-05-01 12:00:00.000000', '2021-09-29 14:00:02.000000', '2022-06-01 15:00:08.000000');
INSERT INTO `competition` VALUES ('glxy100007', '女子举重A组', '田径场C区', 10, 10, '2021-11-07 12:00:00.000000', '2022-05-01 12:00:00.000000', '2021-09-29 14:00:02.000000', '2022-05-01 14:00:08.000000');
INSERT INTO `competition` VALUES ('glxy100008', '88888888', '风雨棚B区', 10, 10, '2022-02-25 06:00:37.000000', '2022-05-01 06:00:40.000000', '2022-02-24 12:00:00.000000', '2022-05-01 12:00:00.000000');
INSERT INTO `competition` VALUES ('glxy100009', '9999999', '学生活动中心B区', 15, 15, '2022-02-14 12:00:00.000000', '2022-05-01 12:00:00.000000', '2022-02-16 12:00:00.000000', '2022-05-01 12:00:00.000000');
INSERT INTO `competition` VALUES ('glxy100011', '男子跳高B组', '田径场A区', 20, 20, '2022-03-14 02:23:43.000000', '2022-05-01 02:23:44.000000', '2022-03-14 02:23:46.000000', '2022-06-01 02:23:47.000000');
INSERT INTO `competition` VALUES ('glxy100012', '测试比赛', '田径场F区', 20, 20, '2024-05-05 21:49:25.000000', '2024-05-05 21:49:27.000000', '2024-05-05 21:49:28.000000', '2024-05-05 21:49:30.000000');

-- ----------------------------
-- Table structure for draft
-- ----------------------------
DROP TABLE IF EXISTS `draft`;
CREATE TABLE `draft`  (
  `draft_id` int NOT NULL AUTO_INCREMENT COMMENT '加油稿id',
  `users_stnumber` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户学号',
  `users_name` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户姓名',
  `college_name` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '学院名称',
  `draft_state` varchar(3) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '加油稿状态（0：未通过，1：通过）',
  `draft_content` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '加油稿内容',
  PRIMARY KEY (`draft_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of draft
-- ----------------------------
INSERT INTO `draft` VALUES (1, '201813006001', '张三', '经济与管理学院', '1', '人生的路，有坦途，也有坎坷；走过的岁月，有欢笑，也有苦涩。泪水告诉我一个跌倒的故事，汗水使我多了一份沉重，几多成熟。理想毕竟不同于现实，失败是生活的一部分，谁也无法选取，无法拒绝。\r\n\r\n　　人生要自己去拼搏，去奋斗，在风雨中百屈不挠、勇往直前，在自己的每个驿站都留下一段无悔的回忆。流泪不是失落，徘徊不是迷惑，成功属于那些战胜失败，坚持不懈，勇于追求梦想的人。\r\n\r\n　　白色的跑道是你运动的轨迹，台上的呐喊是对你拼搏的肯定。这是耐力与意志的检验，超载自我，挑战自我是你的目标，当你体验过从他人身边攸勿而过时，你将再次获得新的感悟，那是自我人生价值的体现，更是为班级争夺荣誉的自豪，拼搏吧！努力吧！运动健儿们，胜利就在眼前，是男儿，我们不言放下。');
INSERT INTO `draft` VALUES (2, '201813007001', '李四四', '教育与音乐学院', '1', '分无事发生点分');
INSERT INTO `draft` VALUES (4, '201813006001', '张三', '经济与管理学院', '1', '　　白色的跑道是你运动的轨迹，台上的呐喊是对你拼搏的肯定。这是耐力与意志的检验，超载自我，挑战自我是你的目标，当你体验过从他人身边攸勿而过时，你将再次获得新的感悟，那是自我人生价值的体现，更是为班级争夺荣誉的自豪，拼搏吧！努力吧！运动健儿们，胜利就在眼前，是男儿，我们不言放下。');
INSERT INTO `draft` VALUES (6, '201813006001', '张三', '经济与管理学院', '', 'test1');
INSERT INTO `draft` VALUES (9, '201813006001', '张三', '经济与管理学院', '1', 'test4');
INSERT INTO `draft` VALUES (10, '201813006001', '张三', '经济与管理学院', '0', '888888888888');
INSERT INTO `draft` VALUES (11, '201813006001', '张三', '经济与管理学院', '0', '888888');
INSERT INTO `draft` VALUES (12, '201813006001', '张三', '经济与管理学院', '0', '88888');
INSERT INTO `draft` VALUES (15, '201813007006', '赵鹏', '马克思学院', '1', 'test02');
INSERT INTO `draft` VALUES (21, '201813005201', '强子', '理工学院', '0', '加油稿测试，加油稿测试，加油稿测试，');
INSERT INTO `draft` VALUES (23, '201813005201', '强子', '理工学院', '1', '测试测试测试测试测试测试测试测试');
INSERT INTO `draft` VALUES (27, '201813007111', '苏圣', '理工学院', '0', '测试测试测试测试测试测试测试测试测试测试');
INSERT INTO `draft` VALUES (29, '201813004001', '华强', '传媒学院', '1', '测试测试');

-- ----------------------------
-- Table structure for enroll
-- ----------------------------
DROP TABLE IF EXISTS `enroll`;
CREATE TABLE `enroll`  (
  `enroll_id` int NOT NULL AUTO_INCREMENT COMMENT '比赛报名表id',
  `competition_nb` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '比赛编号',
  `competition_ne` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '比赛名称',
  `competition_start` datetime(6) NOT NULL COMMENT '比赛开始时间',
  `competition_end` datetime(6) NOT NULL COMMENT '比赛结束时间',
  `competition_site` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '比赛地点',
  `users_stnumber` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户学号',
  `users_name` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户姓名',
  `users_sex` int NOT NULL COMMENT '用户性别',
  `users_phone` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户电话号码',
  `college_name` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户学院名称',
  `competition_score` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '比赛成绩',
  `competition_integral` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '比赛积分',
  PRIMARY KEY (`enroll_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 141 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of enroll
-- ----------------------------
INSERT INTO `enroll` VALUES (110, 'glxy100001', '男子100米米', '2021-10-28 14:23:41.000000', '2022-05-01 15:23:48.000000', '田径场A区', '201813007111', '苏圣', 0, '15077716861', '理工学院', '13.56', '3');
INSERT INTO `enroll` VALUES (111, 'glxy100002', '男子800米', '2021-10-28 14:30:21.000000', '2022-05-01 15:30:25.000000', '田径场B区', '201813007111', '苏圣', 0, '15077716861', '理工学院', NULL, '2');
INSERT INTO `enroll` VALUES (112, 'glxy100003', '女子400米', '2021-10-22 14:39:34.000000', '2022-09-01 15:39:41.000000', '田径场B区', '201813004001', '华强', 1, '15077716800', '传媒学院', '11', '1');
INSERT INTO `enroll` VALUES (113, 'glxy100004', '女子立定跳远', '2021-10-27 14:43:11.000000', '2022-05-01 16:43:15.000000', '田径场D区', '201813004001', '华强', 1, '15077716800', '传媒学院', '2.12m', '2');
INSERT INTO `enroll` VALUES (114, 'glxy100001', '男子100米米', '2022-11-01 02:23:41.000000', '2022-11-03 03:23:48.000000', '田径场A区', '201813005207', '老冯', 0, '15077716861', '商贸与法律学院', '15s', '3');
INSERT INTO `enroll` VALUES (115, 'glxy100001', '男子100米米', '2022-11-01 02:23:41.000000', '2022-11-03 03:23:48.000000', '田径场A区', '201813007206', '打底袜', 0, '15077716872', '艺术与设计学院', '13.2s', '3');
INSERT INTO `enroll` VALUES (116, 'glxy100003', '女子400米', '2021-10-22 14:39:34.000000', '2022-09-01 15:39:41.000000', '田径场B区', '201813005203', '强子啊', 1, '15077716867', '马克思学院', NULL, '1');
INSERT INTO `enroll` VALUES (117, 'glxy100005', '男子铅球', '2021-10-28 14:44:34.000000', '2022-05-01 16:44:36.000000', '田径场F区', '201813007111', '苏圣', 0, '15077716861', '理工学院', NULL, NULL);
INSERT INTO `enroll` VALUES (118, 'glxy100006', '男女混合10000米', '2021-11-07 12:00:00.000000', '2022-05-01 12:00:00.000000', '7777', '201813005207', '老冯', 0, '15077716861', '商贸与法律学院', NULL, NULL);
INSERT INTO `enroll` VALUES (119, 'glxy100005', '男子铅球', '2021-10-28 14:44:34.000000', '2022-05-01 16:44:36.000000', '田径场F区', '201813005207', '老冯', 0, '15077716861', '商贸与法律学院', NULL, NULL);
INSERT INTO `enroll` VALUES (120, 'glxy100006', '男女混合10000米', '2021-11-07 12:00:00.000000', '2022-05-01 12:00:00.000000', '7777', '201813004001', '华强', 1, '15077716800', '传媒学院', NULL, NULL);
INSERT INTO `enroll` VALUES (121, 'glxy100005', '男子铅球', '2023-01-01 09:00:00.000000', '2023-01-01 12:00:00.000000', '田径场F区', '20230001', '张三', 1, '13800000001', '计算机学院', NULL, NULL);
INSERT INTO `enroll` VALUES (122, 'glxy100005', '男子铅球', '2023-01-02 09:00:00.000000', '2023-01-02 12:00:00.000000', '田径场F区', '20230002', '李四', 1, '13800000002', '物理学院', NULL, NULL);
INSERT INTO `enroll` VALUES (123, 'glxy100005', '男子铅球', '2023-01-03 09:00:00.000000', '2023-01-03 12:00:00.000000', '田径场F区', '20230003', '王五', 1, '13800000003', '化学学院', NULL, NULL);
INSERT INTO `enroll` VALUES (124, 'glxy100005', '男子铅球', '2023-01-04 09:00:00.000000', '2023-01-04 12:00:00.000000', '田径场F区', '20230004', '赵六', 1, '13800000004', '生物学院', NULL, NULL);
INSERT INTO `enroll` VALUES (125, 'glxy100005', '男子铅球', '2023-01-05 09:00:00.000000', '2023-01-05 12:00:00.000000', '田径场F区', '20230005', '周七', 1, '13800000005', '数学学院', NULL, NULL);
INSERT INTO `enroll` VALUES (126, 'glxy100005', '男子铅球', '2023-01-06 09:00:00.000000', '2023-01-06 12:00:00.000000', '田径场F区', '20230006', '吴八', 1, '13800000006', '英语学院', NULL, NULL);
INSERT INTO `enroll` VALUES (127, 'glxy100005', '男子铅球', '2023-01-07 09:00:00.000000', '2023-01-07 12:00:00.000000', '田径场F区', '20230007', '郑九', 1, '13800000007', '历史学院', NULL, NULL);
INSERT INTO `enroll` VALUES (128, 'glxy100005', '男子铅球', '2023-01-08 09:00:00.000000', '2023-01-08 12:00:00.000000', '田径场F区', '20230008', '王十', 1, '13800000008', '法学院', NULL, NULL);
INSERT INTO `enroll` VALUES (129, 'glxy100005', '男子铅球', '2023-01-09 09:00:00.000000', '2023-01-09 12:00:00.000000', '田径场F区', '20230009', '冯十一', 1, '13800000009', '哲学院', NULL, NULL);
INSERT INTO `enroll` VALUES (130, 'glxy100005', '男子铅球', '2023-01-10 09:00:00.000000', '2023-01-10 12:00:00.000000', '田径场F区', '20230010', '陈十二', 1, '13800000010', '经济学院', NULL, NULL);
INSERT INTO `enroll` VALUES (131, 'glxy100005', '男子铅球', '2023-01-11 09:00:00.000000', '2023-01-11 12:00:00.000000', '田径场F区', '20230011', '楚十三', 1, '13800000011', '管理学院', NULL, NULL);
INSERT INTO `enroll` VALUES (132, 'glxy100005', '男子铅球', '2023-01-12 09:00:00.000000', '2023-01-12 12:00:00.000000', '田径场F区', '20230012', '卫十四', 1, '13800000012', '艺术学院', NULL, NULL);
INSERT INTO `enroll` VALUES (133, 'glxy100005', '男子铅球', '2023-01-13 09:00:00.000000', '2023-01-13 12:00:00.000000', '田径场F区', '20230013', '蒋十五', 1, '13800000013', '音乐学院', NULL, NULL);
INSERT INTO `enroll` VALUES (134, 'glxy100005', '男子铅球', '2023-01-14 09:00:00.000000', '2023-01-14 12:00:00.000000', '田径场F区', '20230014', '沈十六', 1, '13800000014', '舞蹈学院', NULL, NULL);
INSERT INTO `enroll` VALUES (135, 'glxy100005', '男子铅球', '2023-01-15 09:00:00.000000', '2023-01-15 12:00:00.000000', '田径场F区', '20230015', '韩十七', 1, '13800000015', '电影学院', NULL, NULL);
INSERT INTO `enroll` VALUES (136, 'glxy100005', '男子铅球', '2023-01-16 09:00:00.000000', '2023-01-16 12:00:00.000000', '田径场F区', '20230016', '杨十八', 1, '13800000016', '新闻学院', NULL, NULL);
INSERT INTO `enroll` VALUES (137, 'glxy100005', '男子铅球', '2023-01-17 09:00:00.000000', '2023-01-17 12:00:00.000000', '田径场F区', '20230017', '朱十九', 1, '13800000017', '建筑学院', NULL, NULL);
INSERT INTO `enroll` VALUES (138, 'glxy100005', '男子铅球', '2023-01-18 09:00:00.000000', '2023-01-18 12:00:00.000000', '田径场F区', '20230018', '秦二十', 1, '13800000018', '土木工程学院', NULL, NULL);
INSERT INTO `enroll` VALUES (139, 'glxy100005', '男子铅球', '2023-01-19 09:00:00.000000', '2023-01-19 12:00:00.000000', '田径场F区', '20230019', '许二十一', 1, '13800000019', '机械工程学院', NULL, NULL);
INSERT INTO `enroll` VALUES (140, 'glxy100005', '男子铅球', '2023-01-20 09:00:00.000000', '2023-01-20 12:00:00.000000', '田径场F区', '20230020', '何二十二', 1, '13800000020', '电子工程学院', NULL, NULL);

-- ----------------------------
-- Table structure for group
-- ----------------------------
DROP TABLE IF EXISTS `group`;
CREATE TABLE `group`  (
  `group_id` int NOT NULL AUTO_INCREMENT COMMENT '分组id',
  `competition_ne` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '比赛名称',
  `users_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '用户姓名',
  `users_sex` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '用户性别',
  `college_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '学院名称',
  `group_label` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '分组',
  `group_index` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '组内序号',
  PRIMARY KEY (`group_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 211 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of group
-- ----------------------------
INSERT INTO `group` VALUES (189, 'glxy100005', '苏圣', '男', '理工学院', 'A', '1');
INSERT INTO `group` VALUES (190, 'glxy100005', '老冯', '男', '商贸与法律学院', 'A', '2');
INSERT INTO `group` VALUES (191, 'glxy100005', '张三', '女', '计算机学院', 'A', '3');
INSERT INTO `group` VALUES (192, 'glxy100005', '李四', '女', '物理学院', 'A', '4');
INSERT INTO `group` VALUES (193, 'glxy100005', '王五', '女', '化学学院', 'A', '5');
INSERT INTO `group` VALUES (194, 'glxy100005', '赵六', '女', '生物学院', 'B', '1');
INSERT INTO `group` VALUES (195, 'glxy100005', '周七', '女', '数学学院', 'B', '2');
INSERT INTO `group` VALUES (196, 'glxy100005', '吴八', '女', '英语学院', 'B', '3');
INSERT INTO `group` VALUES (197, 'glxy100005', '郑九', '女', '历史学院', 'B', '4');
INSERT INTO `group` VALUES (198, 'glxy100005', '王十', '女', '法学院', 'B', '5');
INSERT INTO `group` VALUES (199, 'glxy100005', '冯十一', '女', '哲学院', 'C', '1');
INSERT INTO `group` VALUES (200, 'glxy100005', '陈十二', '女', '经济学院', 'C', '2');
INSERT INTO `group` VALUES (201, 'glxy100005', '楚十三', '女', '管理学院', 'C', '3');
INSERT INTO `group` VALUES (202, 'glxy100005', '卫十四', '女', '艺术学院', 'C', '4');
INSERT INTO `group` VALUES (203, 'glxy100005', '蒋十五', '女', '音乐学院', 'C', '5');
INSERT INTO `group` VALUES (204, 'glxy100005', '沈十六', '女', '舞蹈学院', 'D', '1');
INSERT INTO `group` VALUES (205, 'glxy100005', '韩十七', '女', '电影学院', 'D', '2');
INSERT INTO `group` VALUES (206, 'glxy100005', '杨十八', '女', '新闻学院', 'D', '3');
INSERT INTO `group` VALUES (207, 'glxy100005', '朱十九', '女', '建筑学院', 'D', '4');
INSERT INTO `group` VALUES (208, 'glxy100005', '秦二十', '女', '土木工程学院', 'D', '5');
INSERT INTO `group` VALUES (209, 'glxy100005', '许二十一', '女', '机械工程学院', 'E', '1');
INSERT INTO `group` VALUES (210, 'glxy100005', '何二十二', '女', '电子工程学院', 'E', '2');

-- ----------------------------
-- Table structure for ranking
-- ----------------------------
DROP TABLE IF EXISTS `ranking`;
CREATE TABLE `ranking`  (
  `college_name` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '学院名称',
  `ranking_integral` int NULL DEFAULT NULL COMMENT '学院积分'
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of ranking
-- ----------------------------

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `role_id` int NOT NULL AUTO_INCREMENT COMMENT '角色表id（自增）',
  `users_stnumber` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户学号',
  `users_name` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户姓名',
  `role_value` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户拥有角色（权限）',
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 60 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, 'admin', 'admin', 'admin');
INSERT INTO `role` VALUES (2, '201813005201', '强子', 'superAdmin');
INSERT INTO `role` VALUES (3, '201813005202', '王老虎', 'user');
INSERT INTO `role` VALUES (5, '201813007001', '李四四', 'user');
INSERT INTO `role` VALUES (6, '201813007002', '王五5', 'user');
INSERT INTO `role` VALUES (8, '201813007004', '钱77', 'user');
INSERT INTO `role` VALUES (9, '201813007005', '孙八八', 'user');
INSERT INTO `role` VALUES (10, '201813007206', '打底袜', 'user');
INSERT INTO `role` VALUES (15, '993', '993', 'user');
INSERT INTO `role` VALUES (16, '201813006260', '冻手', 'user');
INSERT INTO `role` VALUES (17, '201813006261', '准备冻手', 'user');
INSERT INTO `role` VALUES (18, '201813005203', '强子1', 'user');
INSERT INTO `role` VALUES (19, '201813005204', '王老虎1', 'user');
INSERT INTO `role` VALUES (22, '201813005206', '王老虎2', 'user');
INSERT INTO `role` VALUES (23, '201813005207', '老冯', 'user');
INSERT INTO `role` VALUES (24, '201813005208', '鸡汤来咯', 'user');
INSERT INTO `role` VALUES (28, '201813007006', '赵鹏', 'user');
INSERT INTO `role` VALUES (36, '201813004001', '华强', 'user');
INSERT INTO `role` VALUES (54, '20181300', '1', 'user');
INSERT INTO `role` VALUES (55, '201813007111', '苏圣', 'user');
INSERT INTO `role` VALUES (58, '201813003001', '测试1', 'user');
INSERT INTO `role` VALUES (59, '201813003002', '测试2', 'user');

-- ----------------------------
-- Table structure for site
-- ----------------------------
DROP TABLE IF EXISTS `site`;
CREATE TABLE `site`  (
  `site_id` int NOT NULL AUTO_INCREMENT COMMENT '场地表id(自增)',
  `site_number` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '场地编号',
  `competition_site` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '比赛地点（场地名称）',
  PRIMARY KEY (`site_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of site
-- ----------------------------
INSERT INTO `site` VALUES (1, 'A1', '田径场A区');
INSERT INTO `site` VALUES (2, 'A2', '田径场B区');
INSERT INTO `site` VALUES (3, 'A3', '田径场C区');
INSERT INTO `site` VALUES (4, 'A4', '田径场D区');
INSERT INTO `site` VALUES (5, 'A5', '田径场E区');
INSERT INTO `site` VALUES (6, 'A6', '田径场F区');
INSERT INTO `site` VALUES (7, 'B1', '风雨棚A区');
INSERT INTO `site` VALUES (8, 'B2', '风雨棚B区');
INSERT INTO `site` VALUES (9, 'B3', '风雨棚C区');
INSERT INTO `site` VALUES (10, 'C1', '学生活动中心A区');
INSERT INTO `site` VALUES (11, 'C2', '学生活动中心B区');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `users_stnumber` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户学号',
  `users_pwd` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户密码',
  `users_name` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户姓名',
  `users_sex` int NOT NULL COMMENT '用户性别0:男 1:女',
  `users_phone` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户电话号码',
  `college_name` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '学院名称',
  `users_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '用户头像储存路径',
  `users_email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '用户邮箱',
  PRIMARY KEY (`users_stnumber`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('20181300', 'e10adc3949ba59abbe56e057f20f883e', '1', 1, '1', '理工学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813003001', 'e10adc3949ba59abbe56e057f20f883e', '测试1', 0, '15077716861', '商贸与法律学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813003002', 'e10adc3949ba59abbe56e057f20f883e', '测试2', 1, '15077716862', '语言文学学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813004001', '25d55ad283aa400af464c76d713c07ad', '华强', 1, '15077716800', '传媒学院', '059c6da4-f54c-44bb-84b9-f101714a92b6.png', '714152865@qq.com');
INSERT INTO `users` VALUES ('201813005201', 'e10adc3949ba59abbe56e057f20f883e', '强子', 0, '15077716863', '理工学院', 'b17a86c1-b25d-448d-9463-89f1af614c1a.jpg', NULL);
INSERT INTO `users` VALUES ('201813005202', 'fcea920f7412b5da7be0cf42b8c93759', '王老虎', 0, '15077716862', '经济与管理学院', '默认头像.jpg', '714152865@qq.com');
INSERT INTO `users` VALUES ('201813005203', 'e10adc3949ba59abbe56e057f20f883e', '强子啊', 1, '15077716867', '马克思学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813005204', 'e10adc3949ba59abbe56e057f20f883e', '王老虎1', 1, '15077716862', '经济与管理学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813005206', 'e10adc3949ba59abbe56e057f20f883e', '王老虎2', 1, '15077716862', '经济与管理学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813005207', 'e10adc3949ba59abbe56e057f20f883e', '老冯', 0, '15077716861', '商贸与法律学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813005208', 'e10adc3949ba59abbe56e057f20f883e', '鸡汤来咯', 1, '15077716862', '语言文学学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813006001', 'e10adc3949ba59abbe56e057f20f883e', '张三', 0, '15077716863', '经济与管理学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813006261', 'e10adc3949ba59abbe56e057f20f883e', '准备冻手', 0, '15077716850', '商贸与法律学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813007001', 'e10adc3949ba59abbe56e057f20f883e', '李四四', 0, '15077716865', '教育与音乐学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813007002', 'e10adc3949ba59abbe56e057f20f883e', '王五5', 1, '15077716862', '语言文学学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813007004', 'e10adc3949ba59abbe56e057f20f883e', '钱77', 1, '15077716867', '理工学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813007005', 'e10adc3949ba59abbe56e057f20f883e', '孙八八', 0, '15077716871', '经济与管理学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813007006', 'e10adc3949ba59abbe56e057f20f883e', '赵鹏', 1, '15077716800', '马克思学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('201813007111', 'e10adc3949ba59abbe56e057f20f883e', '苏圣', 0, '15077716861', '理工学院', '6064565e-979d-4bf7-8518-dc4b41c2543c.jpg', NULL);
INSERT INTO `users` VALUES ('201813007206', 'e10adc3949ba59abbe56e057f20f883e', '打底袜', 0, '15077716872', '艺术与设计学院', '默认头像.jpg', NULL);
INSERT INTO `users` VALUES ('admin', 'e10adc3949ba59abbe56e057f20f883e', 'admin', 0, '18507773465', '理工学院', '000a4044-9be5-43f1-b45b-0b5634fa1929.png', '714152865@qq.com');

SET FOREIGN_KEY_CHECKS = 1;
