import ReactDOM from 'react-dom'
import { About } from '../About'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<About />, div)
})

it('renders title correctly', () => {
  const { getByTestId } = render(<About />)
  expect(getByTestId('title-about')).toHaveTextContent('About Us')
})

it('matches snapshot', () => {
  const tree = renderer.create(<About />).toJSON()
  expect(tree).toMatchSnapshot()
})
