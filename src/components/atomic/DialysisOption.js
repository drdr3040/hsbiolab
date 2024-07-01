// src/components/DialysisOption.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DialysisOptionStyles from '../../design/DialysisOptionStyles';

const DialysisOption = ({ selectedOption, onOptionPress }) => {
  return (
    <View style={DialysisOptionStyles.buttonContainer}>
      <TouchableOpacity
        style={[DialysisOptionStyles.optionButton, selectedOption === '네' && DialysisOptionStyles.selectedButton]}
        onPress={() => onOptionPress('네')}
      >
        <Text style={[DialysisOptionStyles.optionText, selectedOption === '네' && DialysisOptionStyles.selectedButtonText]}>네</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[DialysisOptionStyles.optionButton, selectedOption === '아니오' && DialysisOptionStyles.selectedButton]}
        onPress={() => onOptionPress('아니오')}
      >
        <Text style={[DialysisOptionStyles.optionText, selectedOption === '아니오' && DialysisOptionStyles.selectedButtonText]}>아니오</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DialysisOption;
