import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LeftRightText = ({ LeftText, RightText, TextBoxStyle, TextStyle }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.textBox, TextBoxStyle]}>
        <Text style={[styles.leftText, TextStyle]}>{LeftText}</Text>
      </View>
      <View style={[styles.textBox, TextBoxStyle]}>
        <Text style={[styles.rightText, TextStyle]}>{RightText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    padding: height * 0.05 * 0.25,
    backgroundColor: '#f0f0f0',
  },
  textBox: {
    height: height * 0.05,
    justifyContent: 'center',
    borderColor: '#f0f0f0',
    borderWidth: 1,
    paddingHorizontal: height * 0.05 * 0.25,
  },
  leftText: {
    textAlign: 'left',
  },
  rightText: {
    textAlign: 'right',
  },
});

export default LeftRightText;
