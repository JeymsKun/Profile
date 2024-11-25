import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome James</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
})
export default Home