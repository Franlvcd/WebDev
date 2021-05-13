import React from 'react'
import ReactDOM from 'react-dom'
import { Cruise } from '../Cruise'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Cruise />, div)
})
