import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import theme from '../../theme';

const { width, height } = Dimensions.get('window');

const WaterIntakeSection = ({ navigation }) => {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState('수분');

  const renderContent = () => {
    switch (activeTab) {
      case '수분':
        return (
          <View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>총 수분량</Text>
              <Text style={styles.rowValue}>?잔/5잔</Text>
            </View>
            <Text style={styles.note}>수분을 기록해보세요!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WaterRecord')}>
              <Text style={styles.buttonText}>수분 기록하기</Text>
            </TouchableOpacity>
          </View>
        );
      case '혈압':
        return (
          <View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>수축기</Text>
              <Text style={styles.rowValue}>--</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>이완기</Text>
              <Text style={styles.rowValue}>--</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>심박수</Text>
              <Text style={styles.rowValue}>--</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BloodPressureStack', { screen: 'BloodPressure' })}>
              <Text style={styles.buttonText}>혈압 기록하기</Text>
            </TouchableOpacity>
          </View>
        );
      case '체중':
        return (
          <View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>현재 몸무게</Text>
              <Text style={styles.rowValue}>--kg</Text>
            </View>
            <Text style={styles.note}>몸무게를 기록해보세요!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WeightStack', { screen: 'Weight' })}>
              <Text style={styles.buttonText}>체중 기록하기</Text>
            </TouchableOpacity>
          </View>
        );
      case '혈당':
        return (
          <View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>공복 혈당</Text>
              <Text style={styles.rowValue}>--</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>아침 후</Text>
              <Text style={styles.rowValue}>--</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>점심 후</Text>
              <Text style={styles.rowValue}>--</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>저녁 후</Text>
              <Text style={styles.rowValue}>--</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };
=======
  const [cups, setCups] = useState(0);
>>>>>>> link_navigate

  return (
    <View style={styles.section}>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>총 수분량</Text>
        <Text style={styles.rowValue}>{cups}잔/5잔</Text>
      </View>
      <Text style={styles.note}>수분을 기록해보세요!</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCups(cups + 1)}>
        <Text style={styles.buttonText}>물 한잔 기록</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: theme.colors.White,
    borderRadius: width * 0.02,
    padding: width * 0.05,
    marginBottom: height * 0.02,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: height * 0.01,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.MessageGray,
  },
  rowLabel: {
    fontSize: width * 0.04,
    color: theme.colors.textDarkGray,
  },
  rowValue: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: theme.colors.Black,
  },
  button: {
    marginTop: height * 0.015,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.05,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: width * 0.025,
    alignSelf: 'center',
  },
  buttonText: {
    color: theme.colors.White,
    fontSize: width * 0.04,
  },
});

export default WaterIntakeSection;
