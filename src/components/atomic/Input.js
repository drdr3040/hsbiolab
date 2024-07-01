import React, {useState} from 'react';
import { View, TextInput } from 'react-native';
import GrayBoxStyles from '../../design/GrayBox';
import theme from '../../theme';

const Input = ({ placeholder, secureTextEntry, textInputStyle, boxStyle }) => {
//placeholder: "아이디입력" 같은 거
//secureTexTEntry: 비밀번호 입력할 때 "****" 로 뜨게 하는 거 (boolean)
//textInputStyle: 안에 들어갈 textstyle
//Boxstyle: Box style
const [text, setText] = useState('');

return (
  <View style={[GrayBoxStyles.GrayBox, boxStyle]}>
   <TextInput
   placeholder={placeholder}
   style={[GrayBoxStyles.textInput, textInputStyle]}
   placeholderTextColor = {theme.colors.textGray}
   value={text}
   onChangeText={setText}
   secureTextEntry={secureTextEntry}
   />
  </View>
 );
};


export default Input;
