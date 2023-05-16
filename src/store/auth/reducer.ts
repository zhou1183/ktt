import { SET_TOKEN, SET_USER, SET_MENU, SET_ROUTES } from "../Type"
import type { ActionType } from "../../types"
const initialState = {
  userInfo: {},//用户信息
  token: "",//
  menu: [
    {
      label: "概览",
      key: "/admin/dash"
    }
  ],//动态菜单
  routes: [],//动态路由
}
function reducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case SET_USER:
      return { ...state, userInfo: action.payload }
    case SET_TOKEN:
      return { ...state, token: action.payload }
    case SET_MENU:
      return { ...state, menu: action.payload }
    case SET_ROUTES:
      return { ...state, routes: action.payload }
    default:
      return state
  }
}
export default reducer