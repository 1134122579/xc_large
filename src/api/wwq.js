/*
 * @Author: your name
 * @Date: 2021-09-03 22:34:13
 * @LastEditTime: 2021-09-04 09:37:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \navadmin\src\api\seting.js
 * 微文圈新闻资讯展示
 */
import request from "@/utils/request";
// 获取微文圈
export function getWwq(data) {
  return request({
    url: "/getWwq",
    method: "post",
    data,
  });
}
// 获取新闻动态
export function getDynamic(data) {
  return request({
    url: "/getDynamic",
    method: "post",
    data,
  });
}
