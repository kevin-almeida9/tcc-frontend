import React from 'react'
import { useState } from 'react'
import Sider from 'antd/lib/layout/Sider'
import { Menu } from 'antd'
import {
  MenuOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function Sidebar() {
  const history = useHistory()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={`action-menu ${!collapsed && 'action-menu__open'}`}>
        <MenuOutlined
          onClick={() => {
            setCollapsed(!collapsed)
          }}
        />
      </div> 
      <Menu theme="dark" mode="inline"  inlineCollapsed={collapsed} defaultSelectedKeys={['1']}>
        <Menu.Item 
          key="1" 
          onClick={()=>{history.push('/')}} 
          icon={<UserOutlined />}
        >
          Home
        </Menu.Item>
        <Menu.Item 
          key="2" 
          onClick={()=>{history.push('/about')}}
          icon={<VideoCameraOutlined />}
        >
          About
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
