import { UserOutlined, FileProtectOutlined } from '@ant-design/icons'
import { RouteComponentProps } from 'react-router'

import Home from 'views/Home/Home'
import ProtocolForm from 'views/Protocols/ProtocolForm'
import ProtocolsList from 'views/Protocols/ProtocolsList'

export interface IRoute {
  path: string
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  name: string
  exact?: boolean
  icon: any
  hidden?: boolean
}

const home = {
  path: '/',
  component: Home,
  name: 'Home',
  icon:UserOutlined
}

const protocols = {
  path: '/protocols',
  name: 'Protocolos',
  component: ProtocolsList,
  icon:FileProtectOutlined
}

const protocolForm = {
  path: '/protocols/form/:id?',
  name: 'Protocolos',
  component: ProtocolForm,
  icon:FileProtectOutlined,
  hidden: true
}

const routes:IRoute[] =  [ 
  home,
  protocols,
  protocolForm,
]

export default routes
