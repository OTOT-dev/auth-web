import 'antd'
import { RouteObject } from 'react-router'
import ErrorView from '@/views/error'
import { LoginView } from '@/views/login'
import { createBrowserRouter } from 'react-router-dom'
import { AuthRouteGuard } from '@/router/guard/AuthRouteGuard'
import { api_profile } from '@/apis/auth'
import { callAsync } from '@/lib'
import { toast } from 'react-toastify'
import { getDefaultAuthInfo } from '@/store/modules/auth'
import { DashboardView } from '@/views/dashboard'
import { PluginsView } from '@/views/plugins.tsx'


async function getProfile() {
  const [err, res] = await callAsync(api_profile())
  if (err) {
    toast('当前未登录')
    return getDefaultAuthInfo()
  } else return res?.data?.profile
}

const browserRoutes: RouteObject[] = [
  {
    path: '/',
    loader: getProfile,
    element: <AuthRouteGuard loginPath={'/login'} homePath={'/dashboard'} />,
    errorElement: <ErrorView />,
    children: [
      {
        path: 'login',
        element: <LoginView />
      },
      {
        path: 'dashboard',
        element: <DashboardView />
      },
      {
        path: 'plugins',
        element: <PluginsView />
      },
      {
        path: '*',
        element: <div>page not found</div>
      }
    ]
  }
]

const browserRouter = createBrowserRouter(browserRoutes)

export default browserRouter
