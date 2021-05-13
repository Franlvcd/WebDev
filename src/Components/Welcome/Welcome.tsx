import React from 'react'
import './Welcome.css'

export default class Welcome extends React.Component<
  { userName: string; loginTime: string },
  {}
> {
  render() {
    return (
      <div className="welcome">
        Welcome {this.props.userName}. You last logged in on{' '}
        {this.props.loginTime}
        <div className="blank-body"></div>
      </div>
    )
  }
}
