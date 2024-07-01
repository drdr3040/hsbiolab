// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import theme from '../theme';
import images from '../../assets/icons/images';  // Assuming you have images object that contains your logo
import LoginButton from '../components/atomic/LoginButton';
import CustomTextInput from '../components/atomic/CustomTextInput';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    // 전체 화면 컨테이너
    <View style={styles.container}>
      {/* 로고 이미지 */}
      <Image source={images.logo} style={styles.logo} />
      {/* 사용자 아이디 입력란 */}
      <CustomTextInput 
        placeholder="아이디 입력"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      {/* 비밀번호 입력란 */}
      <CustomTextInput 
        placeholder="비밀번호 입력"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {/* 로그인 버튼 */}
      <LoginButton 
        title="로그인"
        onPress={() => navigation.navigate('MainApp')}
        style={styles.loginButton}
      />
      {/* SNS 간편 로그인 텍스트 */}
      <Text style={styles.snsLoginText}>SNS로 간편 로그인</Text>
      {/* SNS 로그인 버튼들 */}
      <View style={styles.snsLoginContainer}>
        <TouchableOpacity style={styles.snsButton}>
          <View style={styles.snsButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.snsButton}>
          <View style={styles.snsButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.snsButton}>
          <View style={styles.snsButton} />
        </TouchableOpacity>
      </View>
      {/* 하단의 회원가입, 아이디찾기, 비밀번호 찾기 버튼들 */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>아이디찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // 전체 화면 컨테이너 스타일
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.White,
    padding: width * 0.05,
  },
  // 로고 이미지 스타일
  logo: {
    width: width * 0.4,
    height: height * 0.1,
    marginBottom: height * 0.05,
  },
  // 입력란 스타일
  input: {
    width: '100%',
    height: height * 0.06,
    backgroundColor: theme.colors.subBlue,
    borderRadius: width * 0.025,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.02,
    color: theme.colors.Black,
  },
  // 로그인 버튼 스타일
  loginButton: {
    width: '100%',
    height: height * 0.06,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  // SNS 간편 로그인 텍스트 스타일
  snsLoginText: {
    fontSize: width * 0.04,
    marginTop: height * 0.03,
    marginBottom: height * 0.01,
    color: theme.colors.textDarkGray,
  },
  // SNS 로그인 버튼 컨테이너 스타일
  snsLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: height * 0.02,
  },
  // SNS 로그인 버튼 스타일
  snsButton: {
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: theme.colors.MessageGray,
    borderRadius: (width * 0.12) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // 하단 버튼 컨테이너 스타일
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  // 하단 버튼 스타일
  footerButton: {
    padding: height * 0.015,
  },
  // 하단 버튼 텍스트 스타일
  footerButtonText: {
    color: theme.colors.textDarkGray,
  },
});

export default LoginScreen;
