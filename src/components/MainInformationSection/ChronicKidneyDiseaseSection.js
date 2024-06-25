import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import theme from '../../theme';

const { width, height } = Dimensions.get('window');

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
    borderRadius: width * 0.02,
    padding: width * 0.05,
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    color: theme.colors.Black,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: theme.colors.textDarkGray,
    marginBottom: height * 0.01,
  },
  warning: {
    fontSize: width * 0.04,
    color: theme.colors.textRed,
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
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: theme.colors.White,
    fontSize: width * 0.04,
  },
});

export default ChronicKidneyDiseaseSection;
