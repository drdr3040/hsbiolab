import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import FloatingButton from './src/components/atomic/FloatingButton';
import FloatingMenu from './src/components/menu/FloatingMenu';
import images from './assets/icons/images';
import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  return <AppNavigator />;
};

export default App;
