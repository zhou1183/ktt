//导入用户类型
import { UserType } from "../types"
import httpService from "../utils/request"
export function LoginView(data: UserType) {
  return httpService.post("/api/login", data)
}