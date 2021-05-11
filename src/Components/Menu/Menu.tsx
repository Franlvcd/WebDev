import { Menu } from 'antd'
import './Menu.css'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  HomeOutlined,
} from '@ant-design/icons'
import React from 'react'

const { SubMenu } = Menu

export class MyMenu extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e: any) => {
    console.log('click ', e)
    this.setState({ current: e.key })
  }

  render() {
    const { current } = this.state
    return (
      <Menu
        onClick={this.handleClick}
        theme="dark"
        mode="horizontal"
        selectedKeys={[current]}
        defaultSelectedKeys={['home']}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <a href="/home">Home</a>
        </Menu.Item>
        <Menu.Item key="about" icon={<SettingOutlined />}>
          About
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
    )
  }
}
