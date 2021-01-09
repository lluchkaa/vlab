import React from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LinkProps } from 'react-router-dom'

import AuthedHeader from './Authed'
import NonAuthedHeader from './NonAuthed'
import userActions from '@redux/user/actions'

const mapStateToProps = (state: ReduxState) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch: ReduxDispatch) => ({
  userActions: bindActionCreators<
    typeof userActions,
    BindedAsyncActions<typeof userActions>
  >(userActions, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

interface NativeProps {
  links?: LinkProps[]
}

type Props = NativeProps & ConnectedProps<typeof connector>

const Header: React.FC<Props> = ({ links, user, userActions: { logout } }) =>
  user ? (
    <AuthedHeader links={links} user={user} logout={logout} />
  ) : (
    <NonAuthedHeader />
  )

export default connector(Header) as React.FC<NativeProps>
