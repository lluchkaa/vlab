import React from 'react'
import { compose } from 'redux'

import reduxBoot from '@boot/redux'

import Routes from '@routes'

import {
  configureReduxConsole,
  configureScrollbarPadding,
} from '@services/configure'

type Props = {}

class App extends React.Component<Props> {
  private cleanup: (() => void) | undefined = undefined
  constructor(props: Props) {
    super(props)
    const cleanupConsole = configureReduxConsole()
    configureScrollbarPadding()

    this.cleanup = () => {
      cleanupConsole?.()
    }
  }

  componentWillUnmount() {
    this.cleanup?.()
  }

  render() {
    return <Routes />
  }
}

const hocs = [reduxBoot]

export default compose<React.FC>(...hocs)(App)
