import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import styles from './style';

export default function profile_user({ theme }) {
  return (
    <View style={[styles.container, theme.container]}>
      <Avatar.Image
        size={150}
        style={StyleProfile.avatar}
        source={require('../../../assets/profile.png')}
      />
      <View style={styles.textContainer}> 
        <Text style={[StyleProfile.textGray, theme.textGray]}>Joined</Text>
        <Text style={[StyleProfile.year, theme.year]}>1 year ago</Text>
      </View>
    </View>
  );
}

const StyleProfile = StyleSheet.create(styles);
