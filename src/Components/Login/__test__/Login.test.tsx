import ReactDOM from 'react-dom'
import Login from '../Login'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

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
  ReactDOM.render(<Login />, div)
})

it('matches snapshot', () => {
  const tree = renderer.create(<Login />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('form can be submitted', () => {
  let wrapper = mount(<Login />)
  const userName = wrapper.find('input').at(0)
  userName.simulate('change', { target: { value: 'abc' } })
  const password = wrapper.find('input').at(1)
  password.simulate('change', { target: { value: '123' } })
  const formLogin = wrapper.find('form').at(0)
  formLogin.simulate('submit')
})
