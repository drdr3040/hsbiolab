import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WeightScreen from '../screens/WeightScreen';
import BloodPressureScreen from '../screens/BloodPressureScreen';
import BloodPressureRecordScreen from '../screens/BloodPressureRecordScreen';
import BottomNavigationBar from './BottomNavigationBar';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTabs" component={BottomNavigationBar} options={{ headerShown: false }} />
      <Stack.Screen name="Weight" component={WeightScreen} options={{ headerTitle: 'Weight Management' }} />
      <Stack.Screen name="BloodPressure" component={BloodPressureScreen} options={{ headerTitle: 'Blood Pressure Management' }} />    
      
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
