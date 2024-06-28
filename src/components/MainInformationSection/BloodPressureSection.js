import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';

const { width, height } = Dimensions.get('window');

const BloodPressureSection = ({ navigation }) => {
  return (
    <View style={styles.section}>
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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BloodPressureStack')}>
        <Text style={styles.buttonText}>혈압 기록하기</Text>
      </TouchableOpacity>
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
      alignSelf: 'center',
    },
    buttonText: {
      color: theme.colors.White,
      fontSize: width * 0.04,
    },
  });
export default BloodPressureSection;
