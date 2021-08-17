import React, { ReactNode } from 'react'
import Layout, { Header, Content} from 'antd/lib/layout/layout'
import Sidebar from 'components/Sidebar'

interface IAuthProps {
  children?: ReactNode
}

function Auth({children}:IAuthProps) {
  return (
    <Layout>
        <Sidebar/>
        <Layout>
          <Header>
          </Header>
          <Content className="content-layput">
            {children}
          </Content>
      </Layout>
    </Layout>
  )
}

export default Auth
