import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, VirtualizedList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import theme from '../theme';
import CustomDropDownPicker from '../components/atomic/CustomDropDownPicker';
import DialysisOption from '../components/atomic/DialysisOption';

const { width, height } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {
  const [selectedDiet, setSelectedDiet] = useState('신장 투석 식단');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: '신장 투석 식단', value: '신장 투석 식단' },
    { label: '혈당 관리 식단', value: '혈당 관리 식단' },
    { label: '체중 관리 식단', value: '체중 관리 식단' },
    { label: '내 식단으로 할래요.', value: '내 식단으로 할래요.' }
  ]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDialysisYes, setIsDialysisYes] = useState(false);
  const [isDialysisNo, setIsDialysisNo] = useState(true);

  const data = [
    { key: '이름을 알려주세요.', placeholder: '홍길동', unit: '' },
    { key: '키를 입력해주세요.', placeholder: '100', unit: ' cm' },
    { key: '나이를 알려주세요.', placeholder: '00', unit: ' 세' },
    { key: '몸무게를 입력해주세요.', placeholder: '00', unit: ' Kg' },
  ];

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    if (option === '네') {
      setIsDialysisYes(true);
      setIsDialysisNo(false);
    } else {
      setIsDialysisYes(false);
      setIsDialysisNo(true);
    }
  };

  const renderItem = ({ item }) => (
    <View key={item.key} style={styles.inputContainer}>
      <Text style={styles.label}>{item.key}</Text>
      <View style={styles.inputWithUnit}>
        <TextInput
          style={styles.input}
          placeholder={item.placeholder}
          placeholderTextColor={theme.colors.textGray}
          autoCapitalize="none"
        />
        <Text style={styles.unit}>{item.unit}</Text>
      </View>
    </View>
  );

  return (
    <VirtualizedList
      data={data}
      initialNumToRender={4}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      getItemCount={() => data.length}
      getItem={(data, index) => data[index]}
      contentContainerStyle={styles.container}
      ListHeaderComponent={() => (
        <>
          <Text style={styles.title}>정확한 건강 관리를 위해 아래 정보를 입력해주세요.</Text>
        </>
      )}
      ListFooterComponent={() => (
        <>
          <Text style={styles.label}>투석 여부를 알려주세요.</Text>
          <Text style={styles.note}>투석 중일 경우 투석날과 복약등의 관리를 해드려요.</Text>
          <DialysisOption selectedOption={selectedOption} onOptionPress={setSelectedOption} />
          <Text style={styles.label}>식단 목표를 정해드려요.</Text>
          <Text style={styles.note}>관리하고자 하는 질병에 따라 다른 식단 목표를 정해드려요.</Text>
          <CustomDropDownPicker
            open={open}
            value={selectedDiet}
            items={items}
            setOpen={setOpen}
            setValue={setSelectedDiet}
            setItems={setItems}
          />
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('MainInformation')}>
              <Text style={styles.startButtonText}>시작하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('MainInformation')}>
              <Text style={styles.skipButtonText}>건너뛰기</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: width * 0.05,
    backgroundColor: theme.colors.background,
    flexGrow: 1,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    color: theme.colors.Black,
  },
  inputContainer: {
    marginBottom: height * 0.02,
  },
  label: {
    fontSize: width * 0.04,
    color: theme.colors.Black,
  },
  inputWithUnit: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.06,
    backgroundColor: theme.colors.subBlue,
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.01,
  },
  input: {
    flex: 1,
    color: theme.colors.Black,
    paddingRight: width * 0.02,
  },
  unit: {
    fontWeight: 'bold',
    color: theme.colors.Black,
  },
  note: {
    fontSize: width * 0.035,
    color: theme.colors.textGray,
    marginBottom: height * 0.02,
  },
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
  dropdownContainer: {
    zIndex: 10, // To make sure dropdown is above other elements
    marginBottom: height * 0.03,
    zIndex: 5000,
  },
  dropdown: {
    width: '100%',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startButton: {
    width: '60%',
    height: height * 0.07,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: theme.colors.White,
    fontSize: width * 0.045,
  },
  skipButton: {
    width: '35%',
    height: height * 0.07,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButtonText: {
    color: theme.colors.textGray,
    fontSize: width * 0.04,
  },
});

export default ProfileScreen;
