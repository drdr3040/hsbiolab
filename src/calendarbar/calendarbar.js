import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';
import theme from './src/theme';

const { width, height } = Dimensions.get('window');

const Calendar = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    generateCalendarDates();
  }, []);

  const generateCalendarDates = () => {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    let tempDates = [];

    // Create a list of dates for the current week
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() - currentDayOfWeek + i);
      tempDates.push({ day: days[i], date: date.getDate() });
    }

    setDates(tempDates);
  };

  const today = new Date();

  const handlePress = (day, date) => {
    Alert.alert(`${day}요일, ${date}일을 눌렀습니다.`);
  };

  return (
    <View style={styles.calendarContainer}>
      {dates.map((item, index) => {
        const isToday = item.date === today.getDate();
        return (
          <TouchableOpacity 
            key={index} 
            style={styles.dayContainer}
            onPress={() => handlePress(item.day, item.date)}
          >
            <View style={[styles.innerContainer, isToday && styles.todayContainer]}>
              <Text style={isToday ? styles.todayText : styles.dayText}>{isToday ? '오늘' : item.day}</Text>
              <Text style={isToday ? styles.todayDate : styles.dateText}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: theme.colors.White,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dayContainer: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  todayContainer: {
    backgroundColor: theme.colors.subBlue,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.1, // 10% of screen width
    height: height * 0.1, // 10% of screen height
  },
  dayText: {
    fontSize: width * 0.04, // 4% of screen width
    color: theme.colors.Black,
    marginBottom: 5,
  },
  todayText: {
    fontSize: width * 0.04, // 4% of screen width
    color: theme.colors.mainBlue,
    marginBottom: 5,
  },
  dateText: {
    fontSize: width * 0.035, // 3.5% of screen width
    color: theme.colors.Black,
  },
  todayDate: {
    fontSize: width * 0.035, // 3.5% of screen width
    color: theme.colors.mainBlue,
  },
});

export default Calendar;
