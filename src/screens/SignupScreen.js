import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <Text style={styles.label}>email</Text>
      <TextInput style={styles.input} placeholder="아이디 입력" placeholderTextColor={theme.colors.textGray} />
      <Text style={styles.label}>비밀번호</Text>
      <TextInput style={styles.input} placeholder="비밀번호 입력" placeholderTextColor={theme.colors.textGray} secureTextEntry />
      <Text style={styles.label}>비밀번호 확인</Text>
      <TextInput style={styles.input} placeholder="비밀번호 확인" placeholderTextColor={theme.colors.textGray} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Email 인증하기</Text>
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.White,
    padding: width * 0.05,
  },
  title: {
    fontSize: width * 0.06,
    marginBottom: height * 0.03,
    color: theme.colors.Black,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: width * 0.05,
    marginBottom: height * 0.01,
    fontSize: width * 0.04,
    color: theme.colors.Black,
  },
  input: {
    width: '100%',
    height: height * 0.06,
    backgroundColor: theme.colors.subBlue,
    borderRadius: width * 0.025,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.02,
    color: theme.colors.Black,
  },
  button: {
    width: '100%',
    height: height * 0.06,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  buttonText: {
    color: theme.colors.White,
    fontSize: width * 0.045,
  },
});

export default SignupScreen;
