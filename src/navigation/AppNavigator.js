import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import MainInformationScreen from '../screens/MainInformationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerTitle: 'Signup' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: 'Login' }} />
        <Stack.Screen name="MainInformation" component={MainInformationScreen} options={{ headerTitle: 'Health Status' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
