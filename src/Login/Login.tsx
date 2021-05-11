import { Form, Input, Button, Checkbox, Row, Col } from 'antd'
import './Login.css'
import { message, Space } from 'antd'
import axios from 'axios'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
    if (values.username !== 'abc' || values.password !== '123') {
      message.error('Incorrect Usename or Password.')
    } else {

    }
    axios
      .get('https://run.mocky.io/v3/f36b2a4f-9de9-49e5-ac6c-5e01b9961bf8')
      .then((res) => {
        console.log(res.data)
      })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="login">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Row>
            <Col span={12}>
              <Button>Cancel</Button>
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
  )
}
