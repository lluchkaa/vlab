import { authed } from './validation'

import Home from '@pages/Home'
import NotFound from '@pages/NotFound'

const pages = {
  Home: authed(Home),

  NotFound,
}

export default pages
