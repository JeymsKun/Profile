import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../components/login_components/title/index';
import Form from '../components/login_components/form/index';
import Login from '../components/login_components/login/index';

export default function LoginScreen() {

  const handleLogin = (email, password) => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Title />
      <Form onLogin={handleLogin} />
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
