import withUser, { WithUserUpdate } from '@hocs/withUser'

import links from '@routes/links'

const authedUpdate: WithUserUpdate = (user, { history }) => {
  if (!user) {
    history.replace(links.login())
  }
}

const notAuthedUpdate: WithUserUpdate = (user, { history }) => {
  if (user) {
    history.replace(links.home())
  }
}

export const authed = withUser(authedUpdate)

export const notAuthed = withUser(notAuthedUpdate)

export default {
  authed,
  notAuthed,
}
