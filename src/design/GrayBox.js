import { StyleSheet ,Dimensions } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const GrayBoxStyles = StyleSheet.create({
 GrayBox: {
    width: width * 0.2,
    height:  height* 0.05,
    backgroundColor: theme.colors.backGray,
 }, 
 textInput: {
    flex: 1,
    color: theme.colors.Black,  
  },
})

export default GrayBoxStyles;
