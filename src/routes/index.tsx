import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'
import Auth from 'layouts/Auth'

function Routes() {
  return (
    <Switch>
      <Auth>
        {
          routes.map((route) => (
            <Route 
              key={route.path}
              {...route}
              exact={true}
            />
          ))
        }
      </Auth>
    </Switch>
  )
}

export default Routes
