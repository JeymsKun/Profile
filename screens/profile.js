import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Avatar from '../components/avatar/index';
import Name from '../components/name/index';
import Joined from '../components/joined/index';
import ProfileGroup from '../components/profile_group/index';
import SettingsGroup from '../components/settings_group/index';
import Manage from '../components/manage/index';
import Notification from '../components/notifications/index';
import DarkMode from '../components/dark_mode/index';
import SignOut from '../components/signout/index';
import { useTheme } from '../ThemeContext';
import { Dark, Light } from '../themes';

export default function Profile() {
  const { darkMode, toggleTheme } = useTheme();
  const currentTheme = darkMode ? Dark : Light;

  return (
    <View style={[styles.container, currentTheme.container]}>
      <StatusBar hidden={false} />
      <Avatar theme={currentTheme} />
      <Name theme={currentTheme} />
      <Joined theme={currentTheme} />
      <ProfileGroup theme={currentTheme} />
      <Manage theme={currentTheme} />
      <SettingsGroup theme={currentTheme} />
      <Notification theme={currentTheme} />
      <DarkMode theme={currentTheme} toggleTheme={toggleTheme} darkMode={darkMode}/>
      <SignOut theme={currentTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
  },
});
