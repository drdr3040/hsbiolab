import React, {useState, useEffect} from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../theme';
import images from '../../assets/icons/images';
import CustomDropDownPickerBottom from "../components/atomic/CustomDropDownPickerBottom";
import CustomButtonImage from "../components/atomic/CustomButtonImage";

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
        console.log('Button pressed!');
    };

    useEffect(() => {
        // 이 부분은 의존 배열을 사용하여 한 번만 실행되도록 합니다.
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.scrollcontainer}>
            <View style={styles.container}>
                <Text style={styles.maintext}>식단</Text>
                <CustomDropDownPickerBottom
                    open={open}
                    value={selectedDiet}
                    items={items}
                    setOpen={setOpen}
                    setValue={setSelectedDiet}
                    setItems={setItems} 
                    dropDownDirection="BOTTOM"
                />
                {['탄수화물', '단백질', '지방', '나트륨', '칼륨', '인'].map((item, index) => (
                <View key={index} style={styles.row}>
                <Text style={styles.rowLabel}>{item}</Text>
                <Text style={styles.rowValue}>0/200g</Text>
                </View>
                ))}
            </View>
            {['아침', '점심', '저녁', '간식'].map((meal, index) => (
                <View key={index} style={styles.container}>
                    <Text style={styles.maintext}>{meal}</Text>
                    <CustomButtonImage
                        onPress={handlePress}
                        imageSource={images.plusbutton}
                        style={styles.customButtonStyle}
                        imageStyle={styles.customButtonImageStyle}
                    />
                    <Text style={styles.maintext}>오늘 뭐 드셨나요?</Text>
                </View>
            ))}
        </ScrollView>
    );
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
        width: width * 0.8,
    },
    customButtonStyle: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: width * 0.075,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.mainBlue,
        marginBottom: height * 0.01,
    },
    customButtonImageStyle: {
        width: width * 0.08,
        height: width * 0.08,
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
