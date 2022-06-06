
import React from 'react'
import {expect, it, jest} from '@jest/globals'

//mocking async storage module
const mockedSetItem = jest.fn()
jest.mock('@react-native-community/async-storage', () => ({
  setItem: mockedSetItem,
}))