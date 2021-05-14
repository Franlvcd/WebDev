import Login from './Components/Login/Login'
import { MyMenu } from './Components/Menu/Menu'
import { Home } from './Components/Home/Home'
import { About } from './Components/About/About'
import { Cruise } from './Components/Cruise/Cruise'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout style={{ padding: '0px' }}>
          <Header style={{ padding: 0, width: '100%' }}>
            <MyMenu />
          </Header>
          <Content className="app-content">
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
          <Footer className="app-footer">
            <Cruise />
          </Footer>
        </Layout>
      </BrowserRouter>
    </div>
  )
}
