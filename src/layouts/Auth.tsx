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
            <h1>Layout</h1>
          </Header>
          <Content>
            {children}
          </Content>
      </Layout>
    </Layout>
  )
}

export default Auth
