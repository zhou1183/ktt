//登录api
import { getUserMenu, login as loginApi } from "../../api/auth"
//reducer type类型
import { SET_MENU, SET_TOKEN, SET_USER, SET_ROUTES } from "../Type"
//用户类型
import { UserType, LoginResponseType } from "../../types"
//dispatch类型
import { Dispatch } from "redux"
import { AxiosResponse } from "axios"
import type { ReactNode } from "react"
import LazyLoad from "../../utils/LazyLoad"
//异步登录action
export function login(data: UserType, callback: Function) {
  //返回一个有默认参数的dispatch函数
  return (dispatch: Dispatch<any>) => {
    //执行登录
    loginApi(data).then((res: AxiosResponse<LoginResponseType>) => {
      if (res.data.code === 200) {
        //执行本地的存储
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("useInfo", JSON.stringify(res.data.user));
        //执行reducer
        dispatch({ type: SET_TOKEN, payload: res.data.token })
        dispatch({ type: SET_USER, payload: res.data.user })
        //实现跳转
        if (callback) { callback(); }
        //登录成功获取菜单
        dispatch(getMenus())
      }
    })
  }
}
//菜单类型
interface MenuItemType{
  label:string
  key:string
  children?:Array<MenuItemType>
}
//接口返回菜单类型
interface OriginMenuItemType{
  path:string
  name:string
  component?:string
  children?:Array<OriginMenuItemType>
}
//格式化菜单
function formaterMenu(list:Array<OriginMenuItemType>):Array<MenuItemType>{
  //定义返回的数据类型
  let temp:Array<MenuItemType> =[];
  list.forEach((element:OriginMenuItemType) => {
    let obj:MenuItemType={
      key:element.path,label:element.name
    }
    if(element.children){
      obj.children=formaterMenu(element.children)
    }
    temp.push(obj)
  });
  return temp;
}
//路由类型
interface RouteItemType{
  path:string
  element:ReactNode
}
//格式路由
function formaterRoutes(list:Array<OriginMenuItemType>):Array<RouteItemType>{
  //定义返回的数据类型
  let temp:Array<RouteItemType> =[];
  list.forEach((element:OriginMenuItemType)=> {
    if(element.component){ 
      let obj:RouteItemType={
        path:element.path,
        element:LazyLoad(element.component.slice(0,-4))
      }
      temp.push(obj)
    }else{
      if(element.children){
        //有子元素递归创造
        let result =formaterRoutes(element.children)
        temp =temp.concat(result)
      }
    } 
  });
  return temp;
}
//异步登录action
export function getMenus() {
  //返回一个有默认参数的dispatch函数
  return (dispatch: Dispatch) => {
    getUserMenu().then((res) => { 
      dispatch({type:SET_MENU,payload:formaterMenu(res.data.list)})
      dispatch({type:SET_ROUTES,payload:formaterRoutes(res.data.list)})
    })
  }
}
