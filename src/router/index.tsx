import { useRoutes } from "react-router-dom"
import baseRouter from "./baseRouter"
function RouterView(){
  //创建路由
  const element = useRoutes(baseRouter)
  //返回创建好的元素
  return (<>{element}</>)
}
//导出
export default RouterView