import React from 'react'
import { compose } from 'redux'

import reduxBoot from '@boot/redux'

import Routes from '@routes'

type Props = {}

class App extends React.Component<Props> {
  render() {
    return <Routes />
  }
}

const hocs = [reduxBoot]

export default compose<React.FC>(...hocs)(App)
