import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        theme={{ colors: { primary: '#0055ff', underlineColor: 'transparent', placeholder: 'black' } }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
});
