import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function SignOut({ theme }) {

  return (
    <View style={[styles.container, theme.container]}>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.textBlack, theme.textBlack]}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginLeft: 25,
    marginTop: 40,
  },
  button: {
    width: 150,
    backgroundColor: '#ccddff',
    borderRadius: 10,
    padding: 10,
  },
  textBlack: {
    fontSize: 18,
    color: '#0055ff',
    textAlign: 'center',
    fontFamily: 'medium',
  },

});