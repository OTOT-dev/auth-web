import { useAuthStore } from '@/store'
import type { AuthState, AuthAction, AuthInfo } from '@/store/modules/auth'
import { LoginParams, RegisterParams, api_login, api_register, api_logout } from '@/apis/auth'
import CryptoJS from 'crypto-js'

const useAuth = () => {
  const { authInfo, setAuthInfo } = useAuthStore((state: AuthState & AuthAction) => {
    return { authInfo: state.authInfo, setAuthInfo: state.setAuthInfo }
  })

  const update = (authInfo: AuthInfo) => setAuthInfo(authInfo)

  /** 用户是否登录 */
  const isLogin = () => authInfo.role?.length > 0

  /** 用户登录 */
  const login = (params: LoginParams) => {
    params.password = CryptoJS.SHA512(params.password).toString()
    return api_login(params)
  }

  /** 用户注册 */
  const register = (params: RegisterParams) => {
    params.password = CryptoJS.SHA512(params.password).toString()
    api_register(params)
  }

  /** 用户登出 */
  const logout = () => api_logout()

  return { authInfo, update, isLogin, login, register, logout }
}

export { useAuth }
