
const TokenKey = 'Admin-Token'

export function getToken(app) {
  return app.$cookies.get(TokenKey)
}

export function setToken(app, token) {
  return app.$cookies.set(TokenKey, token)
}

export function removeToken(app) {
  return app.$cookies.remove(TokenKey)
}
