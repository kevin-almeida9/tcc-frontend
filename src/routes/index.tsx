import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { IRoute } from 'types'
import routes from './routes'
import Auth from 'layouts/Auth'

function Routes() {
  return (
    <Switch>
      <Auth>
        {
          routes.map((route:IRoute) => (
            <Route 
              {...route}
            />
          ))
        }
      </Auth>
    </Switch>
  )
}

export default Routes
