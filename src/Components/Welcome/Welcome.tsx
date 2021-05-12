import './Welcome.css'
import { Typography } from 'antd'
import React from 'react'

const { Title } = Typography

export default class Welcome extends React.Component<
  { userName: string; loginTime: string },
  {}
> {
  render() {
    return (
      <div className="welcome">
        <Title>
          Welcome {this.props.userName}. You last logged in on
          {this.props.loginTime}
        </Title>
      </div>
    )
  }
}
