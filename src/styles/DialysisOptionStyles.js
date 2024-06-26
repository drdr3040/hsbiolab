// src/styles/DialysisOptionStyles.js
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
  optionButton: {
    width: width * 0.4,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.mainBlue,
    borderRadius: 10,
  },
  optionText: {
    color: theme.colors.mainBlue,
    fontSize: width * 0.04,
  },
  selectedButton: {
    backgroundColor: theme.colors.mainBlue,
  },
  selectedButtonText: {
    color: theme.colors.White,
  },
});

export default styles;
