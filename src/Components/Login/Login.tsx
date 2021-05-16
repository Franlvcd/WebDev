import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { message } from 'antd'
import axios from 'axios'
import Welcome from '../Welcome/Welcome'
import './Login.css'

export default class Login extends React.Component<
  {},
  {
    isLoggedIn: boolean
    isCancelled: boolean
    myUserName: string
    loginTime: string
  }
> {
  constructor(props: any) {
    super(props)

    this.state = {
      isCancelled: false,
      isLoggedIn: false,
      myUserName: '',
      loginTime: '',
    }
  }

  layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }

  onFinish = (values: any) => {
    if (values.username !== 'abc' || values.password !== '123') {
      message.error('Incorrect username or password')
      this.setState({ isLoggedIn: false })
    } else {
      axios
        .get('https://run.mocky.io/v3/5fe702b8-999e-434b-9ba9-4c6a20e60cf5')
        .then((res) => {
          this.setState({
            isLoggedIn: true,
            myUserName: res.data.userName,
            loginTime: res.data.loginTime,
          })
        })
    }
  }

  onFinishFailed = (errorInfo: any) => {
    message.error('Login failed.')
    this.setState({ isLoggedIn: false })
  }

  handleCancel(e: any) {
    window.history.back()
  }

  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        {!this.state.isLoggedIn ? (
          <div className="login">
            <Form
              {...this.layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                {...this.tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...this.tailLayout}>
                <Button
                  htmlType="button"
                  style={{ margin: '0 8px' }}
                  onClick={this.handleCancel}
                >
                  Cancel
                </Button>
                <Button htmlType="submit" type="primary">
                  Login
                </Button>
              </Form.Item>
            </Form>
            <div className="blank-body"></div>
          </div>
        ) : (
          <div className="login">
            <Welcome
              userName={this.state.myUserName}
              loginTime={this.state.loginTime}
            />
          </div>
        )}
      </div>
    )
  }
}
