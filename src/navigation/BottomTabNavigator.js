// BottomTabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Dimensions } from 'react-native';
import MainInformationScreen from '../screens/MainInformationScreen';
import MyRoutineScreen from '../screens/MyRoutineScreen';
import TestScreen from '../screens/TestScreen';
import FindHospitalScreen from '../screens/FindHospitalScreen';
import BloodPressureScreen from '../screens/BloodPressureScreen';
import WeightScreen from '../screens/WeightScreen';
import BloodPressureRecordScreen from '../screens/BloodPressureRecordScreen';
import theme from '../theme';
import MainDietScreen from '../screens/MainDietScreen';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = require('../../assets/icons/home.png');
              break;
            case 'MyRoutine':
              iconName = require('../../assets/icons/myroutine.png');
              break;
            case 'Test':
              iconName = require('../../assets/icons/test.png');
              break;
            case 'FindHospital':
              iconName = require('../../assets/icons/findhospital.png');
              break;
            case 'BloodPressure':
            case 'Weight':
            case 'BloodPressureRecord':
            case 'MainDiet':
              iconName = null; // 실제로는 보이지 않도록 설정
              break;
            default:
              break;
          }

          return iconName ? (
            <Image
              source={iconName}
              style={{
                width: size,
                height: size,
                tintColor: color,
                marginBottom: 4,
                resizeMode: 'contain',
              }}
            />
          ) : null;
        },
        tabBarActiveTintColor: theme.colors.mainBlue,
        tabBarInactiveTintColor: theme.colors.NavBar,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      })}
    >
      <Tab.Screen name="Home" component={MainInformationScreen} options={{ tabBarLabel: '홈' }} />
      <Tab.Screen name="MyRoutine" component={MyRoutineScreen} options={{ tabBarLabel: '나의루틴' }} />
      <Tab.Screen name="Test" component={TestScreen} options={{ tabBarLabel: '검사하기' }} />
      <Tab.Screen name="FindHospital" component={FindHospitalScreen} options={{ tabBarLabel: '병원찾기' }} />
      <Tab.Screen name="BloodPressure" component={BloodPressureScreen} options={{ tabBarButton: () => null }} />
      <Tab.Screen name="Weight" component={WeightScreen} options={{ tabBarButton: () => null }} />
      <Tab.Screen name="BloodPressureRecord" component={BloodPressureRecordScreen} options={{ tabBarButton: () => null }} />
      <Tab.Screen name="MainDiet" component={MainDietScreen} options={{ tabBarButton: () => null }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.06,
    gap: width * 0.02,
    width: '100%',
    height: height * 0.09,
    backgroundColor: theme.colors.White,
  },
  tabBarLabel: {
    fontSize: width * 0.03,
    marginTop: 14,
  },
});

export default BottomTabNavigator;
