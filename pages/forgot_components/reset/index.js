import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function ResetScreen() {
  const navigation = useNavigation(); 

  const handleReset = () => {
    console.log('Please check your email!');
  }

  return (
    <View style={reset.container}>
       <Button mode="contained" onPress={handleReset} 
        contentStyle={reset.buttonContent}
        style={reset.button} 
        labelStyle={reset.buttonLabel}>
        Reset Password
      </Button>
      <TouchableOpacity onPress={() => navigation.goBack()} style={reset.backToLoginButton}>
        <Text style={reset.backToLoginText}>Back to login</Text>
      </TouchableOpacity>
    </View>
  );
}

const reset = StyleSheet.create(styles);


