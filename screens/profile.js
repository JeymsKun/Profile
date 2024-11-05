import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Avatar from '../components/profile_components/avatar/index';
import Name from '../components/profile_components/name/index';
import ProfileGroup from '../components/profile_components/profile_group/index';
import SettingsGroup from '../components/profile_components/settings_group/index';
import SignOut from '../components/profile_components/signout/index';
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
      <ProfileGroup theme={currentTheme} />
      <SettingsGroup theme={currentTheme} toggleTheme={toggleTheme} darkMode={darkMode}/>
      <SignOut theme={currentTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
