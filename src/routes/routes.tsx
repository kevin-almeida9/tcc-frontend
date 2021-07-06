import  { Home, About } from 'views'

const home = {
  path: '/',
  component: Home,
  exact:true
}

const about = {
  path: '/about',
  component: About
}

const routes =  [ home, about]

export default routes
