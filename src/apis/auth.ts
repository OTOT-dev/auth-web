import { Axios } from '@/utils/http'

export interface LoginParams {
  email: string
  password: string
}

export interface RegisterParams {
  email: string
  password: string
}

/** 登录 */
export const api_login = (params: LoginParams) => Axios.post('/api/login', params)
/** 注册 */
export const api_register = (params: RegisterParams) => Axios.post('/api/register', params)
/** 登出 */
export const api_logout = () => Axios.post('/api/logout')
/** 获取用户信息 */
export const api_profile = () => Axios.get('/api/profile')
