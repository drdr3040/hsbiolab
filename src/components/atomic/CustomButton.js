import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LoginButtonStyles from '../../design/LoginButtonStyles';

const CustomButton = ({ onPress, title, style, textStyle }) => {
  return (
    <TouchableOpacity style={[LoginButtonStyles.button, style]} onPress={onPress}>
      <Text style={[LoginButtonStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
