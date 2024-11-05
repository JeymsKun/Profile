import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function SignOut({ theme }) {
  const navigation = useNavigation();

  const handleSignOut = () => {
    console.log('You are now Sign Out.')
    navigation.navigate('Login')
  }
  return (
    <View style={[signout.container, theme.container]}>
      <Button mode="contained" onPress={handleSignOut} contentStyle={signout.buttonContent}
        labelStyle={[signout.textBlack, theme.textBlack]}
        style={[signout.button, theme.textBlack]}
      >
        Sign Out
      </Button>
    </View>
  );
}

const signout = StyleSheet.create(styles);

