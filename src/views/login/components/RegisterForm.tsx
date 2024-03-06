import { useAuth } from '@/hooks/useAuth'
import { Form, Input, Button } from 'antd'

export const RegisterForm = () => {
  const { register } = useAuth()

  const handleSubmit = async (values: { email: string, password: string }) => {
    register(values)
  }

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name={'email'} rules={[{ required: true, message: '请输入用户名' }]}>
        <Input id={'email'} type='text' placeholder={'请输入邮箱'} ></Input>
      </Form.Item>
      <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
        <Input id={'password'} type="password" placeholder={'请输入密码'}></Input>
      </Form.Item>
      <Form.Item rules={[{ required: true, message: '请确认密码' }]}>
        <Input type="password" placeholder={'请确认密码'}></Input>
      </Form.Item>
      <Form.Item>
        <Button className='w-full' type='primary' htmlType='submit'>注册</Button>
      </Form.Item>
    </Form >
  )
}
