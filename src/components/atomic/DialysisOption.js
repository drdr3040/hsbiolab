// src/components/DialysisOption.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../styles/DialysisOptionStyles';

const DialysisOption = ({ selectedOption, onOptionPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.optionButton, selectedOption === '네' && styles.selectedButton]}
        onPress={() => onOptionPress('네')}
      >
        <Text style={[styles.optionText, selectedOption === '네' && styles.selectedButtonText]}>네</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, selectedOption === '아니오' && styles.selectedButton]}
        onPress={() => onOptionPress('아니오')}
      >
        <Text style={[styles.optionText, selectedOption === '아니오' && styles.selectedButtonText]}>아니오</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DialysisOption;
