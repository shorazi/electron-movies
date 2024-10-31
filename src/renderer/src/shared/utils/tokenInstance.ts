import { USER_TOKEN_KEY_LOCALSTORAGE } from '../constants'

export const tokenInstance = {
  setToken: (token: string) => {
    localStorage.setItem(USER_TOKEN_KEY_LOCALSTORAGE, token)
  },
  getToken: () => {
    const token = localStorage.getItem(USER_TOKEN_KEY_LOCALSTORAGE)
    return token
  },
  clearToken: () => {
    localStorage.removeItem(USER_TOKEN_KEY_LOCALSTORAGE)
  }
}
