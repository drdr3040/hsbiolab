import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const Calendarbar = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

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
    setSelectedDate(today.getDate()); // Set the initial selected date to today
  };

  const today = new Date();

  const handlePress = (day, date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.calendarContainer}>
      {dates.map((item, index) => {
        const isToday = item.date === today.getDate();
        const isSelected = item.date === selectedDate;

        return (
          <TouchableOpacity 
            key={index} 
            style={styles.dayContainer}
            onPress={() => handlePress(item.day, item.date)}
          >
            <View style={[
              styles.innerContainer, 
              isSelected && styles.selectedContainer
            ]}>
               {isToday && <View style={styles.dot} />}
              <Text style={isSelected ? styles.selectedText : styles.dayText}>
                {item.day}
              </Text>
              <Text style={isSelected ? styles.selectedDate : styles.dateText}>
                {item.date}
              </Text>
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
  selectedContainer: {
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
    ...theme.fonts.Regular_12,
    fontSize: width * 0.04, // 4% of screen width
    color: theme.colors.Black,
    marginBottom: 5,
  },
  selectedText: {
    ...theme.fonts.Regular_12,
    fontSize: width * 0.04, // 4% of screen width
    color: theme.colors.mainBlue,
    marginBottom: 5,
  },
  dateText: {
    ...theme.fonts.Regular_14,
    fontSize: width * 0.035, // 3.5% of screen width
    color: theme.colors.Black,
  },
  selectedDate: {
    ...theme.fonts.Regular_14,
    fontSize: width * 0.035, // 3.5% of screen width
    color: theme.colors.mainBlue,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.mainBlue,
    position: 'absolute',
    top: 10,
  },
});

export default Calendarbar;
