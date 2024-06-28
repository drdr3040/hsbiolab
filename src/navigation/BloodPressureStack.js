import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BloodPressureScreen from '../screens/BloodPressureScreen';
import BottomNavigationBar from './BottomNavigationBar';

const Stack = createStackNavigator();

const BloodPressureStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BloodPressure" component={BloodPressureScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default BloodPressureStack;
