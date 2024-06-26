import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const MedicationSection = ({ isMedication, toggleMedication }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>복약</Text>
      {isMedication ? (
        <>
          <Text style={styles.sectionSubtitle}>약 루틴을 등록하고 복약 관리를 해보세요!</Text>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>복약 진행률: 25%</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '25%' }]} />
            </View>
          </View>
          <Text style={styles.note}>3개의 약이 남았어요.</Text>
        </>
      ) : (
        <>
          <Text style={styles.sectionSubtitle}>약 루틴을 등록하고 복약 관리를 해보세요!</Text>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>복약 진행률: 0%</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={toggleMedication}>
            <Text style={styles.buttonText}>상세보기</Text>
          </TouchableOpacity>
        </>
      )}
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
  progressContainer: {
    marginVertical: height * 0.02,
  },
  progressText: {
    fontSize: width * 0.04,
    color: theme.colors.textDarkGray,
    marginBottom: height * 0.01,
  },
  progressBar: {
    height: height * 0.015,
    backgroundColor: theme.colors.MessageGray,
    borderRadius: height * 0.0075,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.mainBlue,
  },
  note: {
    fontSize: width * 0.04,
    color: theme.colors.textDarkGray,
    textAlign: 'center',
    marginTop: height * 0.02,
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

export default MedicationSection;