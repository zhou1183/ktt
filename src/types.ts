/*api 类型定义 */ 
export interface UserType {
  name: string
  password: string
}
//login 响应类型
export interface LoginResponseType{
  code:number
  token:string
  msg?:string
  user:{
    name:string
    id:number
    score:number
    user_group:number
    avatar:string
  }
}
/*redux 类型定义 */ 
//action的类型
export interface ActionType {
  type: string
  payload?: any
}