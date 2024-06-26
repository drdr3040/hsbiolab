import React, {useState} from 'react';
import { View, TextInput } from 'react-native';
import styles from '../../styles/GrayBox';
import theme from '../../theme';

const Input = ({ placeholder, style, secureTextEntry, textInputStyle, boxStyle }) => {
const [text, setText] = useState('');
  return (
  <View style={[styles.GrayBox, boxStyle]}>
   <TextInput
   placeholder={placeholder}
   style={[styles.textInput, textInputStyle]}
   placeholderTextColor = {theme.colors.textGray}
   value={text}
   onChangeText={setText}
   secureTextEntry={secureTextEntry}
   />
  </View>
 );
};


export default Input;
