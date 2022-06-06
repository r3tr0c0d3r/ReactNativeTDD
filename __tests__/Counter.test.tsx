
import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'
import {expect, it} from '@jest/globals'
import Counter from '../src/screens/Counter'

it('Counter Screen renders correctly', () => {
  const {getByText} = render(<Counter/>)

  const decrement = getByText(/decrement/i)
  const increment = getByText(/increment/i)
  const counterText = getByText(/Current count:/i)

  expect(counterText.props.children).toEqual(['Current count: ', 0])
  fireEvent.press(increment)
  expect(counterText.props.children).toEqual(['Current count: ', 1])
  fireEvent.press(decrement)
  expect(counterText.props.children).toEqual(['Current count: ', 0])
})