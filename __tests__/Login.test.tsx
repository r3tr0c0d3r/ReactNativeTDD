import 'react-native'
import React from 'react'
import {fireEvent, render, waitFor} from '@testing-library/react-native'
import Login from '../src/screens/Login'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

jest.mock('@react-native-async-storage/async-storage', () => ({setItem: jest.fn()}))

jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn(),
    useNavigation: jest.fn(),
  }
})
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}))
jest.mock('@react-native-masked-view/masked-view', () => ({}))

beforeEach(() => {
  // @ts-ignore
  useNavigation.mockReset()
})

it('renders correctly', async () => {
  const mockNavigate = jest.fn()
  // @ts-ignore
  useNavigation.mockImplementation(() => ({navigate: mockNavigate}))
  const fakeResponse = Promise.resolve({token: 'fake-token'})
  // @ts-ignore
  global.fetch.mockResolvedValueOnce({
    json: () => fakeResponse,
  })

  const username = 'chucknorris'
  const password = 'i need no password'
  const {getByText, getByPlaceholderText} = render(<Login />)
  const button = getByText(/submit/i)

  fireEvent.changeText(getByPlaceholderText(/username/i), username)
  fireEvent.changeText(getByPlaceholderText(/password/i), password)
  fireEvent.press(button)

  getByText(/loading/i)
  // @ts-ignore
  expect(global.fetch).toHaveBeenCalledWith(
    'https://e2c168f9-97f3-42e1-8b31-57f4ab52a3bc.mock.pstmn.io/api/login',
    {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'content-type': 'application/json'},
    },
  )
  // @ts-ignore
  expect(global.fetch.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        "https://e2c168f9-97f3-42e1-8b31-57f4ab52a3bc.mock.pstmn.io/api/login",
        Object {
          "body": "{\\"username\\":\\"chucknorris\\",\\"password\\":\\"i need no password\\"}",
          "headers": Object {
            "content-type": "application/json",
          },
          "method": "POST",
        },
      ],
    ]
  `)

  await waitFor(() => expect(mockNavigate).toHaveBeenCalledTimes(1))
  expect(mockNavigate).toHaveBeenCalledWith('Home')
  expect(AsyncStorage.setItem).toHaveBeenCalledWith('token', 'fake-token')
})
