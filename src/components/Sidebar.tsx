import React from 'react'
import { useState } from 'react'
import Sider from 'antd/lib/layout/Sider'
import { Menu } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import routes from 'routes/routes'

function Sidebar({collapsed, onCollapse}:{collapsed: boolean, onCollapse: () => void}) {
  const history = useHistory()

  return (
    <Sider className="Sidebar" trigger={null} collapsible collapsed={collapsed} breakpoint='sm' collapsedWidth={innerWidth < 768 ?"0" : undefined}>
      <div className={`action-menu ${!collapsed && 'action-menu__open'}`}>
        <MenuOutlined
          onClick={() => {
            onCollapse()
          }}
        />
      </div> 
      <Menu theme="dark" mode="inline"  inlineCollapsed={collapsed} defaultSelectedKeys={['1']}>
        {routes.map(route => (
          !route.hidden && <Menu.Item 
            key={route.path}
            onClick={()=>{history.push(route.path)}} 
            icon={<route.icon/>}
          >{route.name}</Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}

export default Sidebar
