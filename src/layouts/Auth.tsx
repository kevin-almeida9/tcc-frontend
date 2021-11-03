import React, { ReactNode, useEffect, useState } from 'react'
import Layout, { Header, Content} from 'antd/lib/layout/layout'
import Sidebar from 'components/Sidebar/Sidebar'
import { MenuOutlined } from '@ant-design/icons'

interface IAuthProps {
  children?: ReactNode
}

function Auth({children}:IAuthProps) {
  const [collapsed, setCollapsed] = useState(true)
  const [isMobile, setISMobile] = useState(innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setISMobile(innerWidth < 768)
    window.addEventListener("resize",handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <Layout>
        <Sidebar 
          collapsed={collapsed}
          onCollapse={() => {
            setCollapsed(!collapsed)
          }}
        />
        <Layout 
          style={{
            marginLeft:isMobile ? 0 : 80,
            filter: collapsed ? '' : 'brightness(0.5)'
          }}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setCollapsed(true)
          }}
        >
          <Header>
            {collapsed &&
            <MenuOutlined
              className="action-menu__collapse-trigger"
              onClick={() => {
                setCollapsed(!collapsed)
              }}
            />}
          </Header>
          <Content className="content-layput">
            {children}
          </Content>
      </Layout>
    </Layout>
  )
}

export default Auth
