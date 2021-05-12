import './About.css'
import { Typography } from 'antd'
import { Divider } from 'antd'
import { Image } from 'antd'

const { Title } = Typography

export const About = () => {
  return (
    <div
      className="about"
      style={{
        padding: 24,
        minHeight: 500,
        backgroundImage: `url("https://www.clipartkey.com/mpngs/m/204-2048679_save-the-environment-gif.png")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    ></div>
  )
}
