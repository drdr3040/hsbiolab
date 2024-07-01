import React, {useState, useEffect} from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import theme from '../theme';
import images from '../../assets/icons/images';  // Assuming you have images object that contains your logo
import LoginButton from '../components/atomic/LoginButton';
import CustomTextInput from '../components/atomic/CustomTextInput';
import CustomDropDownPicker from "../components/atomic/CustomDropDownPicker";
import CustomButton from "../components/atomic/CustomButton";
import CustomButtonImage from "../components/atomic/CustomButtonImage";
import LoginButtonStyles from "../styles/LoginButtonStyles";

const { width, height } = Dimensions.get('window');

const MainDietScreen = ({ navigation }) => {
    const [selectedDiet, setSelectedDiet] = useState('신장 투석 식단');
    const [open, setOpen] = useState(false);

    const [items, setItems] = useState([
        { label: '신장 투석 식단', value: '신장 투석 식단' },
        { label: '혈당 관리 식단', value: '혈당 관리 식단' },
        { label: '체중 관리 식단', value: '체중 관리 식단' },
        { label: '내 식단으로 할래요.', value: '내 식단으로 할래요.' }
      ]);

    const handlePress = () => {
        console.log('Button pressed!')
    };

    useEffect(() => {
        // 이 부분은 의존 배열을 사용하여 한 번만 실행되도록 합니다.
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.scrollcontainer}>
            <View style = {styles.container}>
                <Text style = {styles.maintext}>식단</Text>
                <CustomDropDownPicker>
                    open={open}
                    value={selectedDiet}
                    items={items}
                    setOpen={setOpen}
                    setValue={setSelectedDiet}
                    setItems={setItems}
                    dropDownDirection="BOTTOM"
                </CustomDropDownPicker>
                {['탄수화물', '단백질', '지방', '나트륨', '칼륨', '인'].map((item, index) => (
                <View key={index} style={styles.row}>
                <Text style={styles.rowLabel}>{item}</Text>
                <Text style={styles.rowValue}>0/200g</Text>
                </View>
                ))}
            </View>
            <View style = {styles.container}>
                <Text style = {styles.maintext}>아침</Text>
                <CustomButtonImage
                    onPress={handlePress}
                    imageSource={images.plusbutton}
                    style={styles.customButtonStyle}
                    imageStyle={styles.customButtonImageStyle}
                />
                <Text style = {styles.maintext}>오늘 뭐 드셨나요?</Text>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.maintext}>점심</Text>
                <CustomButtonImage
                    onPress={handlePress}
                    imageSource={images.plusbutton}
                    style={styles.customButtonStyle}
                    imageStyle={styles.customButtonImageStyle}
                />
                <Text style = {styles.maintext}>오늘 뭐 드셨나요?</Text>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.maintext}>저녁</Text>
                <CustomButtonImage
                    onPress={handlePress}
                    imageSource={images.plusbutton}
                    style={styles.customButtonStyle}
                    imageStyle={styles.customButtonImageStyle}
                />
                <Text style = {styles.maintext}>오늘 뭐 드셨나요?</Text>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.maintext}>간식</Text>
                <CustomButtonImage
                    onPress={handlePress}
                    imageSource={images.plusbutton}
                    style={styles.customButtonStyle}
                    imageStyle={styles.customButtonImageStyle}
                />
                <Text style = {styles.maintext}>오늘 뭐 드셨나요?</Text>
            </View>
        </ScrollView>
    ) 
};

const styles = StyleSheet.create({
    scrollcontainer: {
        paddingVertical: height * 0.02,
        backgroundColor: theme.colors.backGray,
        alignItems: 'center',
    },
    maintext: {
        fontSize: width * 0.045,
        fontWeight: 'bold',
        marginBottom: height * 0.01,
        color: theme.colors.Black,
    },
    container: {
        backgroundColor: theme.colors.White,
        borderRadius: width * 0.02,
        padding: width * 0.04,
        marginBottom: height * 0.02,
    },
    customButtonStyle: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    customButtonImageStyle: {
      width: 30,
      height: 30,
    },
    rowLabel: {
      fontSize: width * 0.04,
      color: theme.colors.textDarkGray,
      },
    rowValue: {
      fontSize: width * 0.04,
      fontWeight: 'bold',
      color: theme.colors.Black,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: height * 0.01,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.MessageGray,
      },
  });

  export default MainDietScreen;