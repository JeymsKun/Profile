import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function SignUpScreen() {
  const navigation = useNavigation(); 

  const handleSignUp = () => {
    console.log('Please check your email for verification.');
  }

  return (
    <View style={signup.container}>
       <Button mode="contained" onPress={handleSignUp} 
        contentStyle={signup.buttonContent}
        style={signup.button} 
        labelStyle={signup.buttonLabel}>
        Sign Up
      </Button>
      <TouchableOpacity onPress={() => navigation.goBack()} style={signup.backToLoginButton}>
        <Text style={signup.backToLoginText}>Back to login</Text>
      </TouchableOpacity>
    </View>
  );
}

const signup = StyleSheet.create(styles);


