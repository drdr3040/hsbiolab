import { StyleSheet, Dimensions } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const PrincipalTextInputStyles = StyleSheet.create({
  input: {
    height: height * 0.06,
    backgroundColor: theme.colors.subBlue,
    borderRadius: width * 0.025,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.02,
    color: theme.colors.Black,
  },
});

export default PrincipalTextInputStyles;