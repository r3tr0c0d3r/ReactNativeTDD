import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootParams } from './NavigationParams'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Counter from '../screens/Counter'
import EasyButton from '../screens/EasyButton'
import List from '../screens/List'
import ListWithFetch from '../screens/ListWithFetch'
import Modal from '../screens/Modal'

const Stack = createStackNavigator<RootParams>()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Counter" component={Counter} />
            <Stack.Screen name="EasyButton" component={EasyButton} />
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="ListWithFetch" component={ListWithFetch} />
            <Stack.Screen name="Modal" component={Modal} />
            </Stack.Navigator>
        </NavigationContainer>
      );
}

export default AppNavigator

