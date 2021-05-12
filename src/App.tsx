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
          <MyMenu />
        </Header>
        {/* TODO: Insert Image Here. */}
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
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
        <Footer style={{ textAlign: 'center' }}>
          Created by Fengyi Yang. Copyright 2021.
        </Footer>
      </Layout>
    </div>
  )
}
