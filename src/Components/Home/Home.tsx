import './Home.css'
import { Typography } from 'antd'

const { Title } = Typography

export const Home = () => {
  return (
    <div className="home">
      <Title>Next Source of Clean Water</Title>
      {/* <video autoPlay={true} loop={true} style={{ objectFit: 'fill' }}>
        <source
          type="video/mp4"
          src="https://github.githubassets.com/images/modules/site/home/globe-500.hevc.mp4"
        ></source>
      </video> */}
    </div>
  )
}
