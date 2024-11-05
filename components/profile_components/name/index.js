import { View, StyleSheet} from 'react-native';
import { Text } from 'react-native-paper';

export default function Pangalan({ theme }){

  return (
    <View style={[styles.container, theme.container]}>
        <Text style={[styles.first, theme.first]}>James David</Text>
        <Text style={[styles.second, theme.second]}>Maserin</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginLeft: 30,
    padding: 2,
  },
  first: {
    fontSize: 30,
    fontFamily: 'extraBold',
  },
  second: {
    fontSize: 30,
    marginTop: -20,
    color: 'gray',
    fontFamily: 'extraBold',
  },

});