import { AxiosResponse } from "axios"
//导入用户类型
import { UserType } from "../types" 
import httpService from "../utils/request"
//登录
export function login(data: UserType): Promise<AxiosResponse> {
  return httpService.post("/api/login", data)
}
//获取用户菜单
export function getUserMenu(): Promise<AxiosResponse> {
  return httpService.get("/api/yp/user_permission")
}