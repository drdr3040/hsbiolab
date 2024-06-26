import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../styles/LoginButtonStyles';

const LoginButton = ({ onPress, title, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
