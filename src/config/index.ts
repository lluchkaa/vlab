import * as fonts from './font'

export const isProduction = process.env.NODE_ENV === 'production'

export default {
  ...fonts,
  isProduction,
}
