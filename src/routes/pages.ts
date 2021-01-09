import { authed, notAuthed } from './validation'

import Home from '@pages/Home'
import Login from '@pages/Login'
import Signup from '@pages/Signup'
import NotFound from '@pages/NotFound'

const pages = {
  Home: authed(Home),
  Login: notAuthed(Login),
  Signup: notAuthed(Signup),

  NotFound,
}

export default pages
