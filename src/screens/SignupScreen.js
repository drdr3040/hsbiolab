import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <Text style={styles.label}>email</Text>
      <TextInput style={styles.input} placeholder="아이디 입력" placeholderTextColor={theme.colors.textGray} />
      <Text style={styles.label}>비밀번호</Text>
      <TextInput style={styles.input} placeholder="아이디 입력" placeholderTextColor={theme.colors.textGray} secureTextEntry />
      <Text style={styles.label}>비밀번호 확인</Text>
      <TextInput style={styles.input} placeholder="아이디 입력" placeholderTextColor={theme.colors.textGray} secureTextEntry />
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: theme.colors.Black,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginBottom: 5,
    fontSize: 16,
    color: theme.colors.Black,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.subBlue,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: theme.colors.Black,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: theme.colors.White,
    fontSize: 18,
  },
});

export default SignupScreen;
