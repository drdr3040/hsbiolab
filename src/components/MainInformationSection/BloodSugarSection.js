import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';

const { width, height } = Dimensions.get('window');

const BloodSugarSection = () => {
  return (
    <View style={styles.section}>
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
export default BloodSugarSection;
