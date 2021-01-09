import paths from '@routes/paths'

export const hash = (hash = '') => `#${hash}`

export const home = () => paths.home

const links = {
  hash,

  home,
}

export default links
