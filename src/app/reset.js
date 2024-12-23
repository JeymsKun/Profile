import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './../../pages/forgot_components/title/index';
import Form from './../../pages/forgot_components/form/index';
import Reset from './../../pages/forgot_components/reset/index';

export default function ResetScreen() {

  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
      <Reset/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
