import { Col, Row, Divider } from 'antd'
import React from 'react'
import './FooterColumn.css'
export default class FooterColumn extends React.Component<
  { footerHeader: string; footerElements: string[]; spanColumn: number },
  {}
> {
  marginFooter = '4px'
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: '170px' }}>
          <Row className="footer-row">{this.props.footerHeader}</Row>
          <div>
            {this.props.footerElements.map((element) => (
              <Row style={{ marginBottom: this.marginFooter }}>{element}</Row>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
