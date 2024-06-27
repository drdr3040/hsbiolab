import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WeightScreen from '../screens/WeightScreen';
import BloodPressureScreen from '../screens/BloodPressureScreen';
import BloodPressureRecordScreen from '../screens/BloodPressureRecordScreen';
import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerTitle: 'My Profile' }} />
        <Stack.Screen name="MainTabs" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Weight" component={WeightScreen} options={{ headerTitle: 'Weight Management' }} />
        <Stack.Screen name="BloodPressure" component={BloodPressureScreen} options={{ headerTitle: 'Blood Pressure Management' }} />
        <Stack.Screen name="BloodPressureRecord" component={BloodPressureRecordScreen} options={{ headerTitle: 'Blood Pressure Record' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
