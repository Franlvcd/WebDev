import ReactDOM from 'react-dom'
import { MyMenu } from '../Menu'
import { BrowserRouter } from 'react-router-dom'
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
  ReactDOM.render(
    <BrowserRouter>
      <MyMenu />
    </BrowserRouter>,
    div
  )
})

it('matches snapshot', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <MyMenu />
      </BrowserRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
