import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Profile');  
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={login.container}>
      <Button mode="contained" onPress={handleLogin} 
       contentStyle={login.buttonContent}
       style={login.button} 
       labelStyle={login.buttonLabel}>
        Login
      </Button>
      <TouchableOpacity onPress={handleSignUp} style={login.signup}>
        <Text style={login.text}>Don't have an account?</Text>
        <Text style={login.signupText}> Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const login = StyleSheet.create(styles);
