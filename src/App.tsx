import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Login } from './Login/Login'
import { Demo1 } from './Breadcrumb/Breadcrumb'
import { MyMenu } from './Menu/Menu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <MyMenu />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
