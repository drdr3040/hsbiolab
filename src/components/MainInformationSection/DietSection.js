import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const DietSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>식단</Text>
      {['탄수화물', '단백질', '지방', '나트륨', '칼륨', '인'].map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.rowLabel}>{item}</Text>
          <Text style={styles.rowValue}>0/200g</Text>
        </View>
      ))}
      <Text style={styles.sectionSubtitle}>식단을 잘 관리하여 건강을 유지하세요!</Text>
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
  sectionTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    color: theme.colors.Black,
  },
  sectionSubtitle: {
    fontSize: width * 0.04,
    color: theme.colors.textDarkGray,
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
});

export default DietSection;