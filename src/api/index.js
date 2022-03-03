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
