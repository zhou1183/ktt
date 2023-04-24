//登录api
import { login as loginApi } from "../../api/auth"
//reducer type类型
import { SET_TOKEN, SET_USER } from "../Type"
//用户类型
import { UserType } from "../../types"
//dispatch类型
import { Dispatch } from "redux"
//异步登录action
export function login(data: UserType) {
  //返回一个有默认参数的dispatch函数
  return (dispatch: Dispatch) => {
    //执行登录
    loginApi(data).then((res: any) => {
      if (res.data.code == 200) {
        //执行本地的存储
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("useInfo", JSON.stringify(res.data.user));
        //执行reducer
        dispatch({ type: SET_TOKEN, payload: res.data.token })
        dispatch({ type: SET_USER, payload: res.data.user })
      }
    })
  }
}
