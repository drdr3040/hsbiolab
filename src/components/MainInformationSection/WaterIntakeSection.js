import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import theme from '../../theme';

const { width, height } = Dimensions.get('window');

const WaterIntakeSection = ({ navigation }) => {
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

  return (
    <View style={styles.section}>
      <View style={styles.tabs}>
        {['수분', '혈압', '체중', '혈당'].map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tab, activeTab === tab && styles.activeTab]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: theme.colors.White,
    borderRadius: width * 0.02,
    padding: width * 0.04,
    marginBottom: height * 0.02,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: height * 0.02,
  },
  tab: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginRight: width * 0.04,
    paddingVertical: height * 0.01,
    color: theme.colors.NavBar,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.mainBlue,
    color: theme.colors.mainBlue,
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
  note: {
    fontSize: width * 0.04,
    color: theme.colors.textDarkGray,
    textAlign: 'center',
    marginTop: height * 0.02,
  },
  button: {
    marginTop: height * 0.02,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: width * 0.02,
    alignSelf: 'center',
  },
  buttonText: {
    color: theme.colors.White,
    fontSize: width * 0.045,
  },
});

export default WaterIntakeSection;
