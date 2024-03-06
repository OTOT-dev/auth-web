declare global {
  namespace App {
    interface User {
      /** 邮箱 */
      email: string
      /** 用户名 */
      username: string
      /** 昵称 */
      nickname: string
      /** 用户头像地址 */
      avatar: string
      /** 用户角色 */
      roles: string[]
    }
  }
}

export {}
