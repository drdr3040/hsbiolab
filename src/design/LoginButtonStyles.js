import { StyleSheet, Dimensions } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const LoginButtonStyles = StyleSheet.create({
  button: {
    height: height * 0.06,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.White,
    fontSize: width * 0.045,
  },
});

export default LoginButtonStyles;
