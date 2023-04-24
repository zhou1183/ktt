/*api 类型定义 */ 
export interface UserType {
  name: string
  password: string
} 
/*redux 类型定义 */ 
//action的类型
export interface ActionType {
  type: string
  payload?: any
}