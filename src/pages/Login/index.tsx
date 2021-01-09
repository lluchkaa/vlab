import React, { useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import View from './view'

type Props = RouteComponentProps

const Login: React.FC<Props> = () => {
  const onLogin = useCallback(() => {}, [])

  return <View onLogin={onLogin} />
}

export default Login
