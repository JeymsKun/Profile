import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import styles from './styles';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={login.container}>
      <Button mode="contained" onPress={() => router.push('/dashboard/(tabs)/home')}
       contentStyle={login.buttonContent}
       style={login.button} 
       labelStyle={login.buttonLabel}
      >
        Login
      </Button>
      <TouchableOpacity style={login.signup} onPress={() => router.push('signup')}>
        <Text style={login.text}>Don't have an account?</Text>
        <Text style={login.signupText}> Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const login = StyleSheet.create(styles);
