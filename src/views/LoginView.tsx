import { Button, Form, Input } from 'antd';
//验证成功
const onFinish = (values: any) => { 
  console.log('Success:', values);
};
//验证失败
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
function LoginView(){
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
        <Input placeholder='用户名：'/>
      </Form.Item>

      <Form.Item 
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder='密码：'/>
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