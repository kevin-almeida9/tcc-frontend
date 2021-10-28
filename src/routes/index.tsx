import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'
import Auth from 'layouts/Auth'
import SignIn from 'views/SignIn/SignIn'

function Routes() {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact={true}/>
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
