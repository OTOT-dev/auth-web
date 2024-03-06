import { useAuth } from '@/hooks/useAuth'
import { callAsync } from '@/lib'
import { Button, Form, Input } from 'antd'
import { toast, ToastContainer } from 'react-toastify'

export const LoginForm = () => {
  const { login } = useAuth()

  const handleSubmit = async (values: { email: string, password: string }) => {
    const [err] = await callAsync(login(values))
    if (err) toast.error(`登录出错 => ${err}`)
    else location.reload()
  }

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name={'email'} rules={[{ required: true, message: '请输入用户名' }]}>
        <Input id={'email'} type='text' placeholder={'请输入邮箱'} ></Input>
      </Form.Item>
      <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
        <Input id={'password'} type="password" placeholder={'请输入密码'}></Input>
      </Form.Item>
      <Form.Item>
        <Button className='w-full' type="primary" htmlType={'submit'}>登录</Button>
      </Form.Item>
      <ToastContainer></ToastContainer>
    </Form>
  )
}
