import { StyleSheet } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const WhiteBigBoxStyles = StyleSheet.create({
 WhiteBigBox: {
    width: width * 0.2 * 1.16, //DataBox의 1.16배의 넓이
    height:  height* 0.3 * 9.10, //DatatBox의 9.10배의 높이
    backgroundColor: theme.colors.White,
 }, 
 textInput: {
    flex: 1,
    color: theme.colors.Black,  
  },
})

export default WhiteBigBoxStyles;
