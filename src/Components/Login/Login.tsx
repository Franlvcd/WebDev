import { Form, Input, Button, Checkbox, Row, Col } from 'antd'
import './Login.css'
import { message, Space } from 'antd'
import axios from 'axios'
import { render } from '@testing-library/react'
import React from 'react'
import Welcome from '../Welcome/Welcome'
import { Redirect, useHistory, withRouter } from 'react-router-dom'

export default class Login extends React.Component<
  {},
  { isLoggedIn: boolean; isCancelled: boolean; myUserName: string }
> {
  constructor(props: any) {
    super(props)

    this.state = {
      isCancelled: false,
      isLoggedIn: false,
      myUserName: '',
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
    console.log('Success:', values)
    if (values.username !== 'abc' || values.password !== '123') {
      message.error('Incorrect Usename or Password.')
      this.setState({ isLoggedIn: false })
    } else {
      this.setState({ isLoggedIn: true, myUserName: values.username })
    }

    // axios
    //   .get('https://run.mocky.io/v3/f36b2a4f-9de9-49e5-ac6c-5e01b9961bf8')
    //   .then((res) => {
    //     console.log(res.data)
    //   })
  }

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  handleCancel(e: any) {
    window.history.back()
  }

  render() {
    return (
      <div>
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
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
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
          <Welcome userName={this.state.myUserName} />
        )}
      </div>
    )
  }
}
