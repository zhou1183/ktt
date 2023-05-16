import LoginView from "../views/LoginView";
import AdminView from "../views/admin/AdminView";
//导入权限控制
import Private from "../utils/Private";
//导入预加载工具
import LazyLoad from "../utils/LazyLoad"
const baseRouter=[
  {
    path:"/",
    element:<LoginView/>
  },
  {
    path:"/admin/*",
    element:<Private><AdminView/></Private> ,
    children:[
      {
        path:"",
        element:LazyLoad("/admin/DashView")
      }
    ]
  },
]
export default baseRouter