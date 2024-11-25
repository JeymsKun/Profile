import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { Text } from 'react-native-paper';
import styles from './style';

export default function Grupo({ theme, toggleTheme, darkMode }){

  return(
    <View style={[settings.container, theme.container]}>
      <Text style={[settings.title, theme.title]}>Settings</Text>
      <View style={[settings.notificationContainer, theme.container]}>
        <View style={settings.circle}>
          <MaterialIcons name="notifications-none" size={24} color="black" />
        </View>
        <TouchableOpacity style={settings.button}>
          <Text style={[settings.text, theme.text]}>Notifications</Text>
          <View style={settings.right}>
            <FontAwesome name="chevron-right" size={15} color="gray" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={[settings.darkContainer, theme.container]}>
        <View style={settings.circleDark}>
          <Feather name="moon" size={24} color="royalblue" />
        </View>
        <TouchableOpacity style={settings.button} onPress={toggleTheme}>
          <Text style={[settings.textDark, theme.text]}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Text>
          <View style={settings.right}>
            <FontAwesome name="chevron-right" size={15} color="gray" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const settings = StyleSheet.create(styles);