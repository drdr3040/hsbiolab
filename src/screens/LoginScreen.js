import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import theme from '../theme';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/150x100.png?text=HS' }} style={styles.logo} />
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
    padding: 20,
  },
  header: {
    position: 'absolute',
    top: 60,
    left: 20,
    fontSize: 18,
    color: theme.colors.textDarkGray,
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 40,
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
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: theme.colors.White,
    fontSize: 18,
  },
  snsLoginText: {
    fontSize: 16,
    marginTop: 30,
    marginBottom: 10,
    color: theme.colors.textDarkGray,
  },
  snsLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  snsButton: {
    width: 50,
    height: 50,
    backgroundColor: theme.colors.MessageGray,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  snsButtonIcon: {
    width: 24,
    height: 24,
    backgroundColor: theme.colors.White,
    borderRadius: 12,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  footerButton: {
    padding: 10,
  },
  footerButtonText: {
    color: theme.colors.textDarkGray,
  },
});

export default LoginScreen;
