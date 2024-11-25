import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './style';
import { useRouter } from 'expo-router';

export default function SignOut({ theme }) {
  const router = useRouter();

  return (
    <View style={[signout.container, theme.container]}>
      <Button mode="contained"  onPress={() => router.replace('/')} contentStyle={signout.buttonContent}
        labelStyle={[signout.textBlack, theme.textBlack]}
        style={[signout.button, theme.textBlack]}
      >
        Sign Out
      </Button>
    </View>
  );
}

const signout = StyleSheet.create(styles);

