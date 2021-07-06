import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { IRoute } from 'types'
import routes from './routes'

function Routes() {
  return (
    <Switch>
      {
        routes.map((route:IRoute) => (
          <Route 
            {...route}
          />
        ))
      }

    </Switch>
  )
}

export default Routes
