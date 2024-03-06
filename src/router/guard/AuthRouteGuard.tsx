import { useAuth } from '@/hooks'
import { AuthInfo } from '@/store/modules/auth'
import { IndexView } from '@/views'
import { Navigate, Outlet, useLoaderData } from 'react-router'

interface AuthRouteGuardProps { loginPath: string, homePath: string }

const AuthRouteGuard = ({ loginPath, homePath }: AuthRouteGuardProps) => {
  const path = useLocation().pathname

  const profile = useLoaderData() as AuthInfo

  const { update } = useAuth()
  useEffect(() => {
    update(profile)
  }, [])


  const { isLogin } = useAuth()

  if (!isLogin()) {
    if (path === loginPath) return (<Outlet />)
    else return (<Navigate to={loginPath} replace />)
  } else {
    if (path === loginPath) return (<Navigate to={homePath} replace />)
    else return (<IndexView />)
  }
}


export { AuthRouteGuard }

