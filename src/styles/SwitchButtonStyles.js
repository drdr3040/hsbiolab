import { StyleSheet,Dimensions } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: height * 0.045,
    right: width * 0.03,
  },
  button: {
    borderRadius: height * 0.045 * 0.5,
    backgroundColor: '#FFFFFF',
    //justifyContent: 'center',
    //alignItems: 'center',
    
  },
  image: {
    width: width * 0.12,
    height: height * 0.06,
    resizeMode: 'contain',
  },
});
  export default styles;