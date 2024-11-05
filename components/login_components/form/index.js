import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    navigation.navigate('Reset');
  };

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
      <TouchableOpacity onPress={handleForgotPassword} style={form.forgotPasswordButton}>
        <Text style={form.forgotPasswordText}>forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const form = StyleSheet.create(styles);
