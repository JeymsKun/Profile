import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './style';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  return (
    <View style={form.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={[form.input, styles.textInput]}
        keyboardType="email-address"
        autoCapitalize="none"
        theme={{ colors: { primary: '#0055ff', underlineColor: 'transparent', placeholder: 'black' } }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry={!showPassword}
        style={form.input}
        theme={{ colors: { primary: '#0055ff', underlineColor: 'transparent', placeholder: 'black' } }}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye" : "eye-off"}
            onPress={togglePasswordVisibility}
            color={showPassword ? "#0055ff" : "black"}
          />
        }
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        mode="outlined"
        secureTextEntry={!showConfirmPassword}
        style={form.input}
        theme={{ colors: { primary: '#0055ff', underlineColor: 'transparent', placeholder: 'black' } }}
        right={
          <TextInput.Icon
            icon={showConfirmPassword ? "eye" : "eye-off"}
            onPress={toggleConfirmPasswordVisibility}
            color={showConfirmPassword ? "#0055ff" : "black"}
          />
        }
      />
    </View>
  );
}

const form = StyleSheet.create(styles);
