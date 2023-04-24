import {Outlet} from "react-router-dom"
function AdminView (){
  return (<div>
    <h1>admin</h1>
    <Outlet></Outlet> 
  </div>)
}
export default AdminView