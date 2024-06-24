import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme';

const ChronicKidneyDiseaseSection = ({ isDetailedRisk, toggleRiskDetail }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>나의 만성신부전 위험도는 몇 단계?</Text>
      <Text style={styles.subtitle}>지금 키트로 검사하고 만성 신부전 위험도를 알아보세요.</Text>
      {isDetailedRisk ? (
        <>
          <Text style={styles.warning}>위험 섬세한 관리가 필요한 단계예요.</Text>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>만성신부전 위험도</Text>
            <Text style={styles.rowValue}>4단계</Text>
          </View>
        </>
      ) : (
        <TouchableOpacity style={styles.button} onPress={toggleRiskDetail}>
          <Text style={styles.buttonText}>상세보기</Text>
        </TouchableOpacity>
      )}
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: theme.colors.Black,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
    marginBottom: 8,
  },
  warning: {
    fontSize: 14,
    color: theme.colors.textRed,
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
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: theme.colors.White,
    fontSize: 14,
  },
});

export default ChronicKidneyDiseaseSection;
