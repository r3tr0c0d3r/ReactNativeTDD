import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '../utils/Theme'

type Props = {
    children: React.ReactNode
}

const EasyButton = (props: Props) => {
    const {theme} = useTheme()
    const {backgroundColor, color} = styles[theme]
    return (
      <Pressable style={{backgroundColor, padding: 8}} {...props}>
        <Text style={{color}} >{props.children || 'Click me!'}</Text>
      </Pressable>
    );
}

export default EasyButton

const styles: { [key: string]: any } = StyleSheet.create({
    dark: {
      backgroundColor: 'black',
      color: 'white',
    },
    light: {
      color: 'black',
      backgroundColor: 'white',
    }
  })