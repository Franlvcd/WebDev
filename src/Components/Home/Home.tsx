import './Home.css'
import { Typography } from 'antd'
import { Divider } from 'antd'
import { Image } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'

const { Title } = Typography

const underLine = {
  underline: 'underline',
} as const

export const Home = () => {
  return (
    <div>
      <div
        // className="home"
        style={{
          // padding: 24,
          minHeight: '100vh',
          backgroundImage: `url("https://cdn.dribbble.com/users/88525/screenshots/2534623/earth.gif")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',

            paddingTop: '22%',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Title
              style={{
                color: 'white',
                textAlign: 'center',
                paddingBottom: '48%',
                fontSize: '50px',
                fontWeight: 'bold',
              }}
            >
              <div className="title-background">
                Care to make your solution more eco-friendly?
              </div>
              <div>Greener can help!</div>
            </Title>
          </div>
        </div>
        {/* <Image
          width={600}
          src="https://cdn.mos.cms.futurecdn.net/VpLpwaefu7xJpkwSxHkyAK.gif"
        /> */}
      </div>
      <div
        className="intro"
        style={{
          padding: 24,
          minHeight: 500,
          backgroundColor: 'white',
        }}
      ></div>
    </div>
  )
}
