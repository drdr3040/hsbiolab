import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme';

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
  progressContainer: {
    marginVertical: 16,
  },
  progressText: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
    marginBottom: 8,
  },
  progressBar: {
    height: 10,
    backgroundColor: theme.colors.MessageGray,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.mainBlue,
  },
  note: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
    textAlign: 'center',
    marginTop: 16,
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

export default MedicationSection;
