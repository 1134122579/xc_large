import request from "@/utils/request";
// 获取相册分类
export function getPicClass(params) {
  return request({
    url: "/getPicClass",
    method: "get",
    params,
  });
}
// 获取相册列表
export function getPic(params) {
  return request({
    url: "/getPic",
    method: "get",
    params,
  });
}
// 获取视频分类

export function getVideoTags(params) {
  return request({
    url: "/getVideoTags",
    method: "get",
    params,
  });
}
// 获取视频列表

export function getVideo(params) {
  return request({
    url: "/getVideo",
    method: "get",
    params,
  });
}
