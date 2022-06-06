import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Current count: {count}</Text>
        <Pressable style={styles.button} onPress={decrement}>
          <Text>Decrement</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={increment}>
          <Text>Increment</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    padding: 24,
    alignItems: "center"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  button: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 8,
    backgroundColor: "#9e9ef8",
    justifyContent: "center",
    alignItems: "center"
  }
})