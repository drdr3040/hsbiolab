import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WeightScreen from '../screens/WeightScreen';
import BottomNavigationBar from './BottomNavigationBar'; // Adjust the import path as needed

const Tab = createBottomTabNavigator();

const WeightNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigationBar {...props} />}>
      <Tab.Screen name="Weight" component={WeightScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default WeightNavigator;
