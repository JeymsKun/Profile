import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../../pages/signup_components/title/index';
import Form from '../../pages/signup_components/form/index';
import SignUp from '../../pages/signup_components/signup/index';

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
