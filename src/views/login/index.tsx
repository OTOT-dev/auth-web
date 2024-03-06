import { useState } from 'react'
import { LoginForm } from './components/LoginForm'
import { RegisterForm } from '@/views/login/components/RegisterForm'
import { Card, Divider } from 'antd'
import { useAuth } from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'

export const LoginView = () => {
  const { isLogin } = useAuth()
  const [isLoginPage, setIsLoginPage] = useState(true)

  if (isLogin()) {
    return (
      <Navigate to={'/home'} replace />
    )
  }

  return (
    <div className="flex flex-col items-center min-h-100">
      <header className='py-20 bg-32 w-full bg-no-repeat bg-center bg-[url(../../assets/images/opensource.png)]' />
      <Card className='w-[40rem] min-h-[56rem] p-y-[3.2rem] p-x-[4rem] rounded box-border text-center shadow'>
        <h2 className='mb-9'>{isLoginPage ? `请登录` : `欢迎新用户，请注册`}</h2>
        {isLoginPage ? <LoginForm /> : <RegisterForm />}
        <Divider />
        <a onClick={() => setIsLoginPage(!isLoginPage)}>{isLoginPage ? `没有账号？去注册` : `已有账号？去登录`}</a>
      </Card>
    </div >
  )
}

