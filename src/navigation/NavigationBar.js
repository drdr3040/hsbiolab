// src/navigation/NavigationBar.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationBar from './BottomNavigationBar';

function NavigationBar() {
  return (
    <NavigationContainer>
      <BottomNavigationBar />
    </NavigationContainer>
  );
}

export default NavigationBar;
