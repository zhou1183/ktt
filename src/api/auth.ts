
import { AxiosResponse } from "axios"
//导入用户类型
import { UserType } from "../types"
import httpService from "../utils/request"
export function login(data: UserType): Promise<AxiosResponse> {
  return httpService.post("/api/login", data)
}