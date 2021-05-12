import { Form, Input, Button, Checkbox, Row, Col } from 'antd'
import './Login.css'
import { message } from 'antd'
import axios from 'axios'
import React from 'react'
import Welcome from '../Welcome/Welcome'

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
                <Row>
                  <Col span={12}>
                    <Button onClick={this.handleCancel}>Cancel</Button>
                  </Col>
                  <Col span={12}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </div>
        ) : (
          <Welcome
            userName={this.state.myUserName}
            loginTime={this.state.loginTime}
          />
        )}
      </div>
    )
  }
}
