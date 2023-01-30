/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Navigation from './src/Navigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Navigation />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1
  },
});

export default App;
