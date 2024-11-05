import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function Title() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'extraBold',
    },
});
