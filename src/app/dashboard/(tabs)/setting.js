import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Settings = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
})
export default Settings