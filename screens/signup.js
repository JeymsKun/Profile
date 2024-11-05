import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../components/signup_components/title/index';
import Form from '../components/signup_components/form/index';
import SignUp from '../components/signup_components/signup/index';

export default function SignUpScreen() {

  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
      <SignUp/>
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
