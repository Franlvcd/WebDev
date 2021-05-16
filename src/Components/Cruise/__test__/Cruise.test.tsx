import ReactDOM from 'react-dom'
import { Cruise } from '../Cruise'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }
  }

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Cruise />, div)
})

it('renders footer columns correctly', () => {
  const { getByTestId } = render(<Cruise />)
  expect(getByTestId('footer-elements')).toHaveTextContent(
    /(?=.*Discover)(?=.*Information)(?=.*Contact Us)(?=.*About)(?=.*Software)(?=.*Partnership)/
  )
})

it('matches snapshot', () => {
  const tree = renderer.create(<Cruise />).toJSON()
  expect(tree).toMatchSnapshot()
})
