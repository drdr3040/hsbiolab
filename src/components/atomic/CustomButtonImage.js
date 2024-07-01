import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from '../../styles/LoginButtonStyles';

const CustomButtonImage = ({ onPress, imageSource, style, imageStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Image source={imageSource} style={[styles.buttonImage, imageStyle]}/>
    </TouchableOpacity>
  );
};

export default CustomButtonImage;
