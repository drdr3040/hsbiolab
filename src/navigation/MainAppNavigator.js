import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator'; // Your bottom tab navigator
import ProfileScreen from '../screens/ProfileScreen';
import BloodPressureScreen from '../screens/BloodPressureScreen';
import WeightScreen from '../screens/WeightScreen';
import BloodPressureRecordScreen from '../screens/BloodPressureRecordScreen';

const Stack = createStackNavigator();

const MainAppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerTitle: 'My Profile' }} />
      <Stack.Screen name="BloodPressureRecord" component={BloodPressureRecordScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainAppNavigator;
