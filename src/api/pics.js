/*
 * @Author: your name
 * @Date: 2021-09-03 22:34:13
 * @LastEditTime: 2021-09-04 09:37:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \navadmin\src\api\seting.js
 * 获取相册列表以及相册分类
 */
import request from "@/utils/request";
// 获取相册
export function getPics(data) {
  return request({
    url: "/getPics",
    method: "post",
    data,
  });
}
// 获取相册分类动态
export function getPicsTags(data) {
  return request({
    url: "/getPicsTags",
    method: "post",
    data,
  });
}
