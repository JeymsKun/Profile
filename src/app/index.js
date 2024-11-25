import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../../pages/login_components/title/index';
import Form from '../../pages/login_components/form/index';
import Login from '../../pages/login_components/login/index';

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
      <Login/>
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
