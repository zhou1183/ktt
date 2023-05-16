//路由出口
import { Outlet } from "react-router-dom"
//导入布局
import type { MenuProps } from 'antd';
//导入select redux数据选择
import { useSelector } from "react-redux";
import { Layout, Menu } from 'antd';
//导入state数据类型
import type { RootState } from "../../store"; 
//解构布局组件
const { Header, Footer, Sider, Content } = Layout;
function AdminView() {
  const menu=useSelector((state:RootState)=>state.reducer.menu)
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };
  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Header >Header</Header>
      <Layout>
        <Sider >
          <Menu
            onClick={onClick}
            mode="inline"
            items={menu}
          />
        </Sider>
        <Content >
          <Outlet></Outlet>
        </Content>
      </Layout>
      <Footer >Footer</Footer>
    </Layout>
  )
}
export default AdminView