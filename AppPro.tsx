/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from 'react-native';

function AppPro() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.text_white : styles.text_white}>
        Hello world
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_white: {
    color: '#FFF',
  },
  text_dark: {
    color: '#000',
  },
});

export default AppPro;
