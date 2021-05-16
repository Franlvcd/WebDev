import { Row, Col, Divider } from 'antd'
import './Cruise.css'
import FooterColumn from './FooterColumn/FooterColumn'

const footerStyle = {
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
}

export const Cruise = () => {
  return (
    <div className="app-footer" data-testid="footer-elements">
      <Row gutter={16} justify="center" align="top">
        <Col xs={24} sm={12} md={6} lg={5} style={footerStyle}>
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
            spanColumn={6}
          ></FooterColumn>
        </Col>
        <Col xs={24} sm={12} md={6} lg={5} style={footerStyle}>
          <FooterColumn
            footerHeader={'Information'}
            footerElements={['Developers', 'Marketers', 'Education', 'Status']}
            spanColumn={6}
          ></FooterColumn>
        </Col>
        <Col xs={24} sm={12} md={6} lg={5} style={footerStyle}>
          <FooterColumn
            footerHeader={'Contact Us'}
            footerElements={['Support', 'Find a solution']}
            spanColumn={6}
          ></FooterColumn>
        </Col>

        <Col xs={24} sm={12} md={6} lg={5} style={footerStyle}>
          <FooterColumn
            footerHeader={'About'}
            footerElements={[
              'About us',
              'Careers',
              'Latest news',
              'Partnership',
            ]}
            spanColumn={6}
          ></FooterColumn>
        </Col>
      </Row>
      <Divider />

      <Row justify="center">Copyright 2021. Designed by Frances Yang.</Row>
    </div>
  )
}
