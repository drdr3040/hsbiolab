import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from './src/components/atomic/Input'; // InputBox 컴포넌트를 임포트합니다.

const App = () => {
  return (
    <View style={appStyles.container}>
      <Input placeholder="아이디 입력" 
             textInputStyle={appStyles.textInputStyle}
             boxStyle={appStyles.inputBox}
      />
      <Input placeholder="비밀번호 입력"
             secureTextEntry={true}
             textInputStyle={appStyles.textInput}
             boxStyle={appStyles.inputBox}
             />
    </View>
  );
};

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textInput: {
    color: 'blue', // 원하는 색상으로 변경
  },
  inputBox: {
    width: 200, // 원하는 너비
    height: 50, // 원하는 높이
  },
});

export default App;
