// BloodPressureRecordScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const BloodPressureRecordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>혈압 기록</Text>
      <Button title="기록하기" onPress={() => { /* 기록하기 로직 */ }} />
      <Button title="닫기" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default BloodPressureRecordScreen;
