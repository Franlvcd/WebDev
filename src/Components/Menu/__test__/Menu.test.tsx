import React from 'react'
import ReactDOM from 'react-dom'
import { MyMenu } from '../Menu'
import { getByTestId, render } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MyMenu />, div)
})

// it('renders menu correctly', () => {
//   const { getByTestId } = render(<MyMenu label="click me please"></MyMenu>)
//   getByTestId('mymenu')
// })
