import './About.css'

export const About = () => {
  return (
    <div>
      <div
        style={{
          padding: 0,
          minHeight: 700,
          backgroundImage: `url("https://www.britannica.com/explore/savingearth/wp-content/uploads/sites/4/2019/03/environmental-engineering-hero.jpg")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {' '}
      </div>
      <div>
        <p style={{ fontSize: '80px', color: 'black', marginTop: '20px' }}>
          Future is in your subscription
        </p>
      </div>

      <div
        style={{
          padding: 24,
          // minHeight: 700,
          backgroundColor: 'white',
        }}
      >
        Future is in your subscription
      </div>
    </div>
  )
}
