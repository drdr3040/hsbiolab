import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Dimensions } from 'react-native';
import MainInformationScreen from '../screens/MainInformationScreen';
import MyRoutineScreen from '../screens/MyRoutineScreen';
import TestScreen from '../screens/TestScreen';
import FindHospitalScreen from '../screens/FindHospitalScreen';
import theme from '../theme';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

const MainTabNavigator = () => {
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
            default:
              break;
          }

          return (
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
          );
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

export default MainTabNavigator;
