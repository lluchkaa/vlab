import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import paths from '@routes/paths'
import pages from '@routes/pages'

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact={true} path={paths.home} component={pages.Home} />

      <Route exact={true} path={paths.anyPath} component={pages.NotFound} />
    </Switch>
  </Router>
)

export default Routes
