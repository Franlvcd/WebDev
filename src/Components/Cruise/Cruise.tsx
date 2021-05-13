import { Col, Row, Divider } from 'antd'
import { Footer } from 'antd/lib/layout/layout'
import './Cruise.css'
import FooterColumn from './FooterColumn/FooterColumn'
// const tableStyle = {
//   border: 'none',
//   boxShadow: 'none',
// }

// const underLine = {
//   underline: 'underline',
// } as const

export const Cruise = () => {
  const marginFooter = '4px'
  return (
    <div>
      <Divider />
      {/* <div style={{ marginLeft: '170px' }}>
        <Row gutter={16} justify="center" align="top">
          <Col className="gutter-row" span={5}>
            <Row className="footer-row">Discover</Row>
            <Row style={{ marginBottom: marginFooter }}>Products</Row>
            <Row style={{ marginBottom: marginFooter }}>Trails</Row>
            <Row style={{ marginBottom: marginFooter }}>Services</Row>
          </Col>
          <Col className="gutter-row" span={5}>
            <Row className="footer-row">Information</Row>
            <Row style={{ marginBottom: marginFooter }}>Developers</Row>
            <Row style={{ marginBottom: marginFooter }}>Business Partners</Row>
          </Col>
          <Col className="gutter-row" span={5}>
            <Row className="footer-row">Connect with us</Row>
            <Row style={{ marginBottom: marginFooter }}>Support</Row>
            <Row style={{ marginBottom: marginFooter }}>Find a Solution</Row>
          </Col>
          <Col className="gutter-row" span={5}>
            <Row className="footer-row">About Greener</Row>
            <Row style={{ marginBottom: marginFooter }}>Careers</Row>
            <Row style={{ marginBottom: marginFooter }}>Latest News</Row>
            <Row style={{ marginBottom: marginFooter }}>
              Corporate Responsibility
            </Row>
          </Col>
        </Row>
      </div> */}
      <div>
        <Row gutter={16} justify="center" align="top">
          <FooterColumn
            footerHeader={'Discover'}
            footerElements={[
              'Products',
              'Trails',
              'Services',
              'Software',
              'Industries',
              'Demos',
            ]}
            spanColumn={5}
          ></FooterColumn>
          <FooterColumn
            footerHeader={'Information'}
            footerElements={['Developers', 'Parents', 'Business Partners']}
            spanColumn={5}
          ></FooterColumn>
          <FooterColumn
            footerHeader={'Contact with us'}
            footerElements={['Support', 'Find a solution']}
            spanColumn={5}
          ></FooterColumn>
          <FooterColumn
            footerHeader={'About Greener'}
            footerElements={['Careers', 'Latest news']}
            spanColumn={5}
          ></FooterColumn>
        </Row>
      </div>
      <Divider style={{ marginTop: '100px' }} />
    </div>
  )
}
