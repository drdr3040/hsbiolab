import React from 'react';
import { TextInput } from 'react-native';
import styles from '../../styles/PrincipalTextInputStyles';
import theme from '../../theme';

const CustomTextInput = ({ placeholder, secureTextEntry, onChangeText, value, style }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.textGray}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default CustomTextInput;
