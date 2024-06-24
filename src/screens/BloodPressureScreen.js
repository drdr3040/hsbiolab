import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Dimensions } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const BloodPressureScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>혈압 관리</Text>
        <Button title="저장하기" onPress={() => { /* 저장 기능 구현 */ }} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>수축기</Text>
        <TextInput style={styles.input} placeholder="--" keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>이완기</Text>
        <TextInput style={styles.input} placeholder="--" keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>심박수</Text>
        <TextInput style={styles.input} placeholder="--" keyboardType="numeric" />
      </View>
      <TouchableOpacity style={styles.recordButton} onPress={() => navigation.navigate('BloodPressureRecord')}>
        <Text style={styles.recordButtonText}>혈압 기록하기</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>나의 루틴</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>검사하기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>병원찾기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.White,
    padding: width * 0.04,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: width * 0.045,
    color: theme.colors.Black,
  },
  inputContainer: {
    marginBottom: height * 0.02,
  },
  label: {
    fontSize: width * 0.04,
    color: theme.colors.Black,
    marginBottom: height * 0.01,
  },
  input: {
    height: height * 0.05,
    borderColor: theme.colors.MessageGray,
    borderWidth: 1,
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.02,
    color: theme.colors.Black,
  },
  recordButton: {
    backgroundColor: theme.colors.mainBlue,
    paddingVertical: height * 0.015,
    borderRadius: width * 0.02,
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  recordButtonText: {
    color: theme.colors.White,
    fontSize: width * 0.045,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: height * 0.02,
    borderTopWidth: 1,
    borderColor: theme.colors.MessageGray,
    marginTop: height * 0.04,
  },
  footerText: {
    color: theme.colors.mainBlue,
  },
});

export default BloodPressureScreen;
