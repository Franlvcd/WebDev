import './Welcome.css'
import { Typography } from 'antd'
import React from 'react'

const { Title } = Typography

export default class Welcome extends React.Component<{ userName: string }, {}> {
  render() {
    return (
      <div className="welcome">
        <Title>Welcome {this.props.userName}</Title>
      </div>
    )
  }
}
