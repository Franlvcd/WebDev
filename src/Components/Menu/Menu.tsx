import { Menu } from 'antd'
import './Menu.css'
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons'
import React from 'react'

const { SubMenu } = Menu

export class MyMenu extends React.Component {
  state = {
    current: 'home',
  }

  handleClick = (e: any) => {
    this.setState({ current: e.key })
  }

  render() {
    const { current } = this.state
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          // theme="light"
          style={{ width: '100%' }}
          mode="horizontal"
          selectedKeys={[current]}
          defaultSelectedKeys={['home']}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <a href="/home">Home</a>
          </Menu.Item>
          <Menu.Item key="about" icon={<SettingOutlined />}>
            <a href="/about">About</a>
          </Menu.Item>
          <SubMenu key="services" icon={<AppstoreOutlined />} title="Services">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="login" icon={<UserOutlined />}>
            <a href="/login">Login</a>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
