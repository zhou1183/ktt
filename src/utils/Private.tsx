import { Navigate, useLocation } from "react-router-dom";
//导入ReactNode类型
import { ReactNode, FC } from 'react'
interface Iprops {
  children?: ReactNode
}
//定义一个函数是FC类型 指令泛型是Iprops
//props来自父组件传参，children是嵌套类型
//FC是react内置类型代表函数组件类型 FunctionComponent
//interface FC<P> {props:P}
//使用FC类型传入真实类型为Iprops
// function Private(props: Iprops) {
//   const token = sessionStorage.getItem("token")
//   const location = useLocation()
//   if (token) {
//     return <>{props.children}</>;
//   } else {
//     //跳转首页，添加redirect查询参数
//     return <Navigate to={`/?redirect=${location.pathname}`}></Navigate>
//   }
// } 
const Private: FC<Iprops> = (props) => {
  const token = sessionStorage.getItem("token")
  const location = useLocation()
  if (token) {
    return <>{props.children}</>;
  } else {
    //跳转首页，添加redirect查询参数
    return <Navigate to={`/?redirect=${location.pathname}`}></Navigate>
  }
}
export default Private