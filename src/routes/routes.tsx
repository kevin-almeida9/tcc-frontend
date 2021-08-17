import  { Home, Protocols } from 'views'

const home = {
  path: '/',
  component: Home,
  exact:true
}

const protocols = {
  path: '/about',
  component: Protocols
}

const routes =  [ home, protocols]

export default routes
