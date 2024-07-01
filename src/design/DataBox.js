import { StyleSheet } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const DataBoxStyles = StyleSheet.create({
 WhiteBigBox: {
    width: width * 0.2,
    height:  height* 0.05,
    backgroundColor: theme.colors.White,
 }, 
 textInput: {
    flex: 1,
    color: theme.colors.Black,  
  },
})

export default DataBoxStyles;
