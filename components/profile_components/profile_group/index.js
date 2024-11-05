import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from './style';

export default function Grupo({ theme }){

  return(
    <View style={[profile.container, theme.container]}>
      <Text variant="" style={[profile.title, theme.title]}>Profile</Text>

      <View style={[profile.manageContainer, theme.container]}>
      <View style={profile.circle}>
        <FontAwesome5 name="dot-circle" size={24} color='coral' />
      </View>
      <TouchableOpacity style={profile.button}>
        <Text style={[profile.text, theme.text]}>Manage user</Text>
        <View style={profile.right}>
          <FontAwesome name="chevron-right" size={15} color="gray" />
        </View>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const profile = StyleSheet.create(styles);