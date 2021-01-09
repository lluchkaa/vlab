import paths from '@routes/paths'

export const hash = (hash = '') => `#${hash}`

export const home = () => paths.home
export const login = () => paths.login

const links = {
  hash,

  home,
  login,
}

export default links
