import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WeightScreen from '../screens/WeightScreen';
import BottomNavigationBar from './BottomNavigationBar';

const Stack = createStackNavigator();

const WeightStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Weight" component={WeightScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default WeightStack;
