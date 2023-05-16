import { Button, Form, Input } from 'antd';
//导入dispatch工具
import { useDispatch } from 'react-redux';
//使用状态
import { useState } from 'react';
//导入登录方法
import { login } from '../store/auth/action';
//导入导航与查询参数
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { Dispatch } from 'redux';
//验证失败
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
function LoginView() {
  //定义dispatch工具（发送action动作执行reducer）
  const dispatch: Dispatch<any> = useDispatch()
  //定义用户名和密码
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  //获取查询参数
  const redirect = searchParams.getAll("redirect")[0]
  //定义回调方法
  const callback = () => {
    navigate(redirect)
  }
  //验证成功
  const onFinish = (values: any) => {
    //执行dispatch 
    dispatch(login({ name, password }, callback))
  };
  return (
    <div className='loginBox'>
      <h2>
        <span className='primary'>快团团</span>登录
      </h2>
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder='用户名：' value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='密码：' value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item >
          <Button type="primary" block htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default LoginView