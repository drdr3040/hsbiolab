import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import theme from '../theme';
import images from '../assets/images';  // 이미지 객체 임포트

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo} />
      <TextInput style={styles.input} placeholder="아이디 입력" placeholderTextColor={theme.colors.textGray} />
      <TextInput style={styles.input} placeholder="비밀번호 입력" placeholderTextColor={theme.colors.textGray} secureTextEntry />
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('MainInformation')}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity> 
      <Text style={styles.snsLoginText}>SNS로 간편 로그인</Text>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.White,
    padding: width * 0.05,
  },
  header: {
    position: 'absolute',
    top: height * 0.07,
    left: width * 0.05,
    fontSize: width * 0.045,
    color: theme.colors.textDarkGray,
  },
  logo: {
    width: width * 0.4,
    height: height * 0.1,
    marginBottom: height * 0.05,
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
  loginButton: {
    width: '100%',
    height: height * 0.06,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  loginButtonText: {
    color: theme.colors.White,
    fontSize: width * 0.045,
  },
  snsLoginText: {
    fontSize: width * 0.04,
    marginTop: height * 0.03,
    marginBottom: height * 0.01,
    color: theme.colors.textDarkGray,
  },
  snsLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: height * 0.02,
  },
  snsButton: {
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: theme.colors.MessageGray,
    borderRadius: (width * 0.12) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  snsButtonIcon: {
    width: width * 0.06,
    height: width * 0.06,
    backgroundColor: theme.colors.White,
    borderRadius: (width * 0.06) / 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  footerButton: {
    padding: height * 0.015,
  },
  footerButtonText: {
    color: theme.colors.textDarkGray,
  },
});

export default LoginScreen;
