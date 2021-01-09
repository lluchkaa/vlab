import React, { useMemo } from 'react'
import { compose } from 'redux'

import reduxBoot from '@boot/redux'

import Routes from '@routes'

import {
  configureReduxConsole,
  configureScrollbarPadding,
} from '@services/configure'
import useConstructor from '@hooks/useConstructor'
import useLoadUsers from '@hooks/useLoadUsers'
import Loader from '@common/Loader'

type Props = {}

const App: React.FC<Props> = () => {
  useConstructor(() => {
    const cleanupConsole = configureReduxConsole()
    configureScrollbarPadding()

    return () => {
      cleanupConsole?.()
    }
  })

  const usersReady = useLoadUsers()

  const ready = useMemo(() => usersReady, [usersReady])

  return ready ? <Routes /> : <Loader />
}

const hocs = [reduxBoot]

export default compose<React.FC>(...hocs)(App)
