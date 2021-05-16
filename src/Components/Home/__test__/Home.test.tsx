import ReactDOM from 'react-dom'
import { Home } from '../Home'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Home />, div)
})

it('matches snapshot', () => {
  const tree = renderer.create(<Home />).toJSON()
  expect(tree).toMatchSnapshot()
})
