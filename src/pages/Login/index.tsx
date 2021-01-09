import React, { useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import useBindedAction from '@hooks/useBindedAction'
import userActions from '@redux/user/actions'

import View from './view'
import Values from './values'

type Props = RouteComponentProps

const Login: React.FC<Props> = () => {
  const login = useBindedAction(userActions.login)

  const onSubmit = useCallback(
    ({ email, password }: Values) => {
      login(email, password)
    },
    [login]
  )

  return <View onSubmit={onSubmit} />
}

export default Login
