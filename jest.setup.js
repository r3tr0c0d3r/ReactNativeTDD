import React from 'react'
import '@testing-library/jest-native/extend-expect'
import {jest, beforeEach} from '@jest/globals'

// surpressing Animated: `useNativeDriver` is not supported warning
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

beforeEach(() => {
    global.fetch = jest.fn((...args) => {
      console.warn('global.fetch needs to be mocked in tests', ...args)
      throw new Error('global.fetch needs to be mocked in tests')
    })
  })