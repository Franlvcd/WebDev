import React from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './Components/Login/Login'
import { MyMenu } from './Components/Menu/Menu'
import { Home } from './Components/Home/Home'
import { About } from './Components/About/About'
import { Cruise } from './Components/Cruise/Cruise'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Divider } from 'antd'

const { Header, Content, Footer } = Layout

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header
            style={{
              position: 'fixed',
              zIndex: 1,
              width: '100%',
              backgroundColor: '#FFFFFF',
            }}
          >
            <MyMenu />
          </Header>
          {/* TODO: Insert Image Here. */}
          <Content
            className="site-layout"
            style={{
              padding: 0,
              marginTop: '66px',
              color: 'white',
            }}
          >
            <Switch>
              <Route exact path={['/', '/home']} component={Home} />
              <Route path="/About">
                <About />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>
            <Cruise />
          </Footer>
        </Layout>
      </BrowserRouter>
    </div>
  )
}
