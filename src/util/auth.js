import cookie from 'js-cookie'

export const cookieName = 'zyl_web_authToken'

// 登录token
export const authToken = cookie.get(cookieName) ? JSON.parse(cookie.get(cookieName)).access_token : ''

// token刷新口令
export const refreshToken = cookie.get(cookieName) ? JSON.parse(cookie.get(cookieName)).refresh_token : ''

// 保存登录token
export const saveAuthToken = (token) => {
    cookie.set(cookieName, token)
}

// 删除登录token
export const removeAuthToken = () => {
    cookie.remove(cookieName)
}