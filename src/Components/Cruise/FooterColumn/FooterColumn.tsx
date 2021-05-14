import { Row } from 'antd'
import React from 'react'
export default class FooterColumn extends React.Component<
  { footerHeader: string; footerElements: string[]; spanColumn: number },
  {}
> {
  render() {
    return (
      <div className="footer-element">
        <Row className="footer-row">{this.props.footerHeader}</Row>
        <div>
          {this.props.footerElements.map((element) => (
            <Row style={{ marginBottom: '7px', fontSize: '20px' }}>
              {element}
            </Row>
          ))}
        </div>
      </div>
    )
  }
}
