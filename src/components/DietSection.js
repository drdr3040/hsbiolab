import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

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
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: theme.colors.Black,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
    marginBottom: 16,
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
});

export default DietSection;
