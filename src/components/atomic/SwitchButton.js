import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, } from 'react-native';
import styles from '../../styles/SwitchButtonStyles';


const SwitchButton = ({ onPress, icon }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={icon} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};


export default SwitchButton;
