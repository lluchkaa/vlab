import React, { useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import useBindedAction from '@hooks/useBindedAction'
import userActions from '@redux/user/actions'

import View from './view'

type Props = RouteComponentProps

const Signup: React.FC<Props> = () => {
  const signup = useBindedAction(userActions.signup)

  const onSignup = useCallback((newUser: UserModel) => signup(newUser), [
    signup,
  ])

  return <View onSignup={onSignup} />
}

export default Signup
