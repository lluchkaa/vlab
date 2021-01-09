import React from 'react'
import { compose } from 'redux'

import reduxBoot from '@boot/redux'

import Routes from '@routes'

import {
  configureReduxConsole,
  configureScrollbarPadding,
} from '@services/configure'
import useConstructor from '@hooks/useConstructor'

type Props = {}

const App: React.FC<Props> = () => {
  useConstructor(() => {
    const cleanupConsole = configureReduxConsole()
    configureScrollbarPadding()

    return () => {
      cleanupConsole?.()
    }
  })

  return <Routes />
}

const hocs = [reduxBoot]

export default compose<React.FC>(...hocs)(App)
