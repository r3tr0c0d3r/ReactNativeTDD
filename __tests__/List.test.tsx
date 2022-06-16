import 'react-native'
// @ts-ignore
import React from 'react'
import {
  act,
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native'
import {expect, it} from '@jest/globals'
import SectionList from '../src/screens/List'

const eventData = {
  nativeEvent: {
    contentOffset: {
      x: 0,
      y: 425,
    },
    contentSize: {
      // Dimensions of the scrollable content
      height: 885,
      width: 328,
    },
    layoutMeasurement: {
      // Dimensions of the device
      height: 469,
      width: 328,
    },
  },
}

it('scrolls to top and refreshes all items', async () => {
  // const promise = Promise.resolve()
  // const refresh = jest.fn();
  // const endReached = jest.fn()
  const {getByText, getByTestId, queryByTestId} = render(<SectionList/>)

  getByText(/pizza/i)

  expect(() => getByText(/the impossible burger/i)).toThrow(
    'Unable to find an element with text: /the impossible burger/i',
  ) //intially not shown
  
  fireEvent.scroll(getByTestId('flat-list'), eventData)
  
  
  await waitForElementToBeRemoved(() => getByText(/loading more dishes/i))
  await waitFor(() => expect(getByText(/the impossible burger/i)))
  // await act(() => promise)
  
})
