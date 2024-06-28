import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BottomNavigationBar from './BottomNavigationBar';
import BloodPressureScreen from '../screens/BloodPressureScreen'; // Adjust the import path as needed
import WeightScreen from '../screens/WeightScreen'; // Import the new WeightNavigator

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerTitle: 'My Profile' }} />
        <Stack.Screen name="MainTabs" component={BottomNavigationBar} options={{ headerShown: false }} />
        <Stack.Screen name="BloodPressure" component={BloodPressureScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Weight" component={WeightScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
