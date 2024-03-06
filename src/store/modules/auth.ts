import { create } from 'zustand'

interface AuthInfo {
  email: string
  role: string
}

interface AuthState {
  authInfo: AuthInfo
}

interface AuthAction {
  setAuthInfo: (authInfo: AuthInfo) => void
}

const getDefaultAuthInfo = (): AuthInfo => {
  return {
    email: '',
    role: ''
  }
}

const useAuthStore = create<AuthState & AuthAction>(set => ({
  authInfo: getDefaultAuthInfo(),
  setAuthInfo: authInfo => set(() => ({ authInfo }))
}))

export type { AuthInfo, AuthState, AuthAction }
export { useAuthStore, getDefaultAuthInfo }
