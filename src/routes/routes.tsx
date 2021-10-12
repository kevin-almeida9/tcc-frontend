import { UserOutlined, FileProtectOutlined } from '@ant-design/icons'
import { BedIcon } from 'assets/Icons'
import { ReactNode } from 'react'
import { RouteComponentProps } from 'react-router'
import BedsList from 'views/Beds/BedsList'

import Home from 'views/Home/Home'
import ProtocolForm from 'views/Protocols/ProtocolForm'
import ProtocolsList from 'views/Protocols/ProtocolsList'

export interface IRoute {
  path: string
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | any
  name: string
  exact?: boolean
  icon: ReactNode | any
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

const Beds = {
  path: '/beds',
  name: 'Leitos',
  component: BedsList,
  icon: BedIcon
}

const routes:IRoute[] =  [ 
  home,
  protocols,
  protocolForm,
  Beds
]

export default routes
