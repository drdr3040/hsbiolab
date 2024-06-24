import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const BloodPressureRecordScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>혈압 기록</Text>
        <Button title="닫기" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateTimeInput}>
          <Text>{date.toISOString().split('T')[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.dateTimeInput}>
          <Text>{time.toLocaleTimeString('ko-KR')}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={onChangeTime}
          />
        )}
      </View>
      <View style={styles.measurementContainer}>
        <TextInput style={styles.measurementInput} placeholder="수축기" />
        <TextInput style={styles.measurementInput} placeholder="이완기" />
        <TextInput style={styles.measurementInput} placeholder="심박수" />
      </View>
      <TextInput
        style={styles.memoInput}
        placeholder="메모"
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>기록하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.White,
    padding: width * 0.04,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: width * 0.045,
    color: theme.colors.Black,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
  dateTimeInput: {
    flex: 1,
    height: height * 0.05,
    borderColor: theme.colors.MessageGray,
    borderWidth: 1,
    borderRadius: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.01,
  },
  measurementContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
  measurementInput: {
    flex: 1,
    height: height * 0.05,
    borderColor: theme.colors.MessageGray,
    borderWidth: 1,
    borderRadius: width * 0.02,
    textAlign: 'center',
    marginHorizontal: width * 0.01,
  },
  memoInput: {
    height: height * 0.12,
    borderColor: theme.colors.MessageGray,
    borderWidth: 1,
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.02,
    marginBottom: height * 0.02,
  },
  saveButton: {
    backgroundColor: theme.colors.mainBlue,
    paddingVertical: height * 0.015,
    borderRadius: width * 0.02,
    alignItems: 'center',
  },
  saveButtonText: {
    color: theme.colors.White,
    fontSize: width * 0.045,
  },
});

export default BloodPressureRecordScreen;
