import { Menu } from 'antd'
import './Menu.css'
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

export class MyMenu extends React.Component {
  state = {
    current: 'home',
  }

  handleClick = (e: any) => {
    console.log(e.key)
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
          className="menu"
          // defaultSelectedKeys={['home']}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="about" icon={<SettingOutlined />}>
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </Menu.Item>
          <SubMenu key="services" icon={<AppstoreOutlined />} title="Services">
            <Menu.ItemGroup title="Consultation Services">
              <Menu.Item key="water">Water</Menu.Item>
              <Menu.Item key="infrastructure">Infrastructure</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Training and Education">
              <Menu.Item key="certificates">Certificates</Menu.Item>
              <Menu.Item key="forkids">For Kids</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="login" icon={<UserOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
