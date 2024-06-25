import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const DialysisSection = ({ isDialysis, toggleDialysis }) => {
  return (
    <View style={styles.section}>
      {isDialysis ? (
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>김소영님, 오늘은 투석날이에요.</Text>
            <TouchableOpacity onPress={toggleDialysis}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>투석</Text>
            <Text style={styles.rowValue}>오전 11:30</Text>
          </View>
          <Text style={styles.note}>메모 여의도성모병원</Text>
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>김소영님, 혹시 투석중이신가요?</Text>
            <TouchableOpacity onPress={toggleDialysis}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>투석 루틴을 등록하시면 투석날을 관리할 수 있어요.</Text>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>투석</Text>
            <Text style={styles.rowValue}>오전 11:30</Text>
          </View>
          <Text style={styles.note}>메모 여의도성모병원</Text>
          <TouchableOpacity style={styles.button} onPress={toggleDialysis}>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: theme.colors.Black,
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

export default DialysisSection;