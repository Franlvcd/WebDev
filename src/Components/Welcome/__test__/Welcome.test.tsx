import React from 'react'
import ReactDOM from 'react-dom'
import Welcome from '../Welcome'
import { getByTestId, render } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Welcome userName={'aaa'} loginTime={'05/13/2021 9:58 PM'} />,
    div
  )
})

// it('renders menu correctly', () => {
//   const { getByTestId } = render(<MyMenu label="click me please"></MyMenu>)
//   getByTestId('mymenu')
// })
