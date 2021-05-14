import './About.css'

export const About = () => {
  return (
    <div>
      <div
        style={{
          padding: 0,
          minHeight: 500,
          backgroundImage: `url("https://www.britannica.com/explore/savingearth/wp-content/uploads/sites/4/2019/03/environmental-engineering-hero.jpg")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div>
        <p className="title-text-about">About Us</p>
        <p className="about-content">
          We are a group of people who are wildly passionate about changing the
          way engineering solution is built. We believe jumping out of the box
          and thinking about a bigger picture - the globe and future
          generations. We exist to embrace the global ecosystem and unlock
          creativity. Our platform empowers the world's leading firms to build
          eco-fiendly solutions.
        </p>
      </div>

      <div className="background-vision">
        <p className="vision-text">Our Vision</p>
        <p className="about-content">
          Bring inspiration and innovation to people with our expertise in
          envirimental engineering.
        </p>
      </div>
    </div>
  )
}
