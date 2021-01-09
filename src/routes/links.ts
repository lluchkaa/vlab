import paths from '@routes/paths'

export const hash = (hash = '') => `#${hash}`

export const home = () => paths.home
export const login = () => paths.login
export const signup = () => paths.signup

const links = {
  hash,

  home,
  login,
  signup,
}

export default links
