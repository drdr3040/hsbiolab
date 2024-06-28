import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BloodPressureScreen from '../screens/BloodPressureScreen';
import BottomNavigationBar from './BottomNavigationBar'; // Adjust the import path as needed

const Tab = createBottomTabNavigator();

const BloodPressureNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigationBar {...props} />}>
      <Tab.Screen name="BloodPressure" component={BloodPressureScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BloodPressureNavigator;
