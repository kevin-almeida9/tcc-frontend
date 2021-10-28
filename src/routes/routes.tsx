import { FileProtectOutlined, AppstoreOutlined, FileTextOutlined, DotChartOutlined } from '@ant-design/icons'
import { BedIcon } from 'assets/Icons'
import { ReactNode } from 'react'
import { RouteComponentProps } from 'react-router'
import BedsList from 'views/Beds/BedsList'
import FailMode from 'views/FMEA/FailModeForm'

import Home from 'views/Home/Home'
import POPForm from 'views/POPs/POPForm'
import POPList from 'views/POPs/POPList'
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

const dashboard = {
  path: '/dashboard',
  component: Home,
  name: 'Dashboard',
  icon: AppstoreOutlined
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

const process = {
  path: '/process',
  name: 'POP',
  component: POPList,
  icon: FileTextOutlined
}

const popform = {
  path: '/process/form/:id?',
  name: 'POP',
  component: POPForm,
  icon:FileProtectOutlined,
  hidden: true
}

const Beds = {
  path: '/beds',
  name: 'Leitos',
  component: BedsList,
  icon: BedIcon
}


const fmeaTab = {
  path: '/fmea',
  name: 'FMEA',
  component: FailMode,
  icon: DotChartOutlined
}

const routes:IRoute[] =  [ 
  dashboard,
  protocols,
  process,
  protocolForm,
  popform,
  Beds,
  fmeaTab
]

export default routes
