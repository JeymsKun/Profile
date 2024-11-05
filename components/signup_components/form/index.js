import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showEyes, setShowEyes] = useState(false);
  const [showConfirmEyes, setShowConfirmEyes] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setShowEyes(!showEyes);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
    setShowConfirmEyes(!showConfirmEyes);
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
            name={() => (
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Icon name={showPassword ? "eye" : "eye-off"} size={24} color={showEyes ? "#0055ff" : "black"} />
              </TouchableOpacity>
            )}
          />
        }
      />
      <TextInput
        label="Confirm Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry={!showPassword}
        style={form.input}
        theme={{ colors: { primary: '#0055ff', underlineColor: 'transparent', placeholder: 'black' } }}
        right={
          <TextInput.Icon
            name={() => (
              <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                <Icon name={showConfirmPassword ? "eye" : "eye-off"} size={24} color={showConfirmEyes ? "#0055ff" : "black"} />
              </TouchableOpacity>
            )}
          />
        }
      />
    </View>
  );
}

const form = StyleSheet.create(styles);
