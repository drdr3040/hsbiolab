import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme';

const WaterIntakeSection = ({ activeTab, setActiveTab }) => {
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
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 16,
    paddingVertical: 4,
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
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.MessageGray,
  },
  rowLabel: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
  },
  rowValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.Black,
  },
  note: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default WaterIntakeSection;
