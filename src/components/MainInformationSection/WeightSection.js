import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';

const { width, height } = Dimensions.get('window');

const WeightSection = ({ navigation }) => {
  return (
    <View style={styles.section}>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>현재 몸무게</Text>
        <Text style={styles.rowValue}>--kg</Text>
      </View>
      <Text style={styles.note}>몸무게를 기록해보세요!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WeightStack')}>
        <Text style={styles.buttonText}>체중 기록하기</Text>
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

export default WeightSection;
