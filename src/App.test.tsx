import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import App from './App'

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }
  }

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(
    /Care to make your solution more eco-friendly?/i
  )
  expect(linkElement).toBeInTheDocument()
})

it('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
