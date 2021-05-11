import React from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './Components/Login/Login'
import { MyMenu } from './Components/Menu/Menu'
import { Home } from './Components/Home/Home'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'

const { Header, Content, Footer } = Layout

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          {/* <div className="logo" /> */}
          <MyMenu />
        </Header>
        Insert Image Here.
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <BrowserRouter>
              <Switch>
                <Route exact path={['/', '/home']} component={Home} />
                <Route path="/About">{/* <About /> */}</Route>
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Fengyi Yang</Footer>
      </Layout>
    </div>
  )
}
