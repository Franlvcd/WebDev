import './Home.css'
import { Typography } from 'antd'
import { Divider } from 'antd'
import { Image } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'

const { Title } = Typography

export const Home = () => {
  return (
    <div
      className="home"
      style={{
        padding: 24,
        minHeight: 1000,
        backgroundImage: `url("https://cdn.dribbble.com/users/88525/screenshots/2534623/earth.gif")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        <Title style={{ color: 'white', textAlign: 'left' }}>
          Care to make your solution more eco-friendly?
          <Title style={{ color: 'white', textAlign: 'left' }}>
            GREENER can help <HeartTwoTone twoToneColor="#eb2f96" />
          </Title>
        </Title>
        {/* <Image
          width={600}
          src="https://cdn.mos.cms.futurecdn.net/VpLpwaefu7xJpkwSxHkyAK.gif"
        /> */}
      </div>

      {/* <video autoPlay={true} loop={true} style={{ objectFit: 'fill' }}>
        <source
          type="video/mp4"
          src="https://github.githubassets.com/images/modules/site/home/globe-500.hevc.mp4"
        ></source>
      </video> */}
    </div>
  )
}
