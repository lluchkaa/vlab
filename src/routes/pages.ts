import { authed, notAuthed } from './validation'

import Home from '@pages/Home'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'

const pages = {
  Home: authed(Home),
  Login: notAuthed(Login),

  NotFound,
}

export default pages
