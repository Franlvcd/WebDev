import ReactDOM from 'react-dom'
import Welcome from '../Welcome'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Welcome userName={'aaa'} loginTime={'05/13/2021 9:58 PM'} />,
    div
  )
})

it('renders welcome page correctly', () => {
  const { getByTestId } = render(
    <Welcome userName={'aaa'} loginTime={'05/13/2021 9:58 PM'} />
  )
  expect(getByTestId('welcome-test')).toHaveTextContent(/You last logged in on/)
})
