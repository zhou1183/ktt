//创建hash路由
import {HashRouter as Router} from "react-router-dom"
//导入路由配置
import RouterView from "./router";

function App() {
  return (
    //返回内容
     <Router><RouterView></RouterView></Router>
  );
}

export default App;
