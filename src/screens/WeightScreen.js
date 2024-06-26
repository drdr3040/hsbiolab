import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Dimensions } from 'react-native';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const WeightScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>현재 체중</Text>
        <Button title="저장하기" onPress={() => { /* 저장 기능 구현 */ }} />
      </View>
      <View style={styles.weightContainer}>
        <TouchableOpacity style={styles.weightButton}>
          <Text style={styles.weightButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.weightText}>00 Kg</Text>
        <TouchableOpacity style={styles.weightButton}>
          <Text style={styles.weightButtonText}>+</Text>
        </TouchableOpacity> 
      </View>
      <Text style={styles.note}>체중을 기록해보세요!</Text>
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>목표 체중</Text>
        <TextInput style={styles.goalInput} placeholder="? kg" />
        <TouchableOpacity>
          <Text style={styles.editButton}>수정</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>일간</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>주간</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>월간</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartNote}>현재 체중</Text>
        <Text style={styles.chartNote}>목표 체중 ?kg</Text>
        {/* 차트 컴포넌트 추가 */}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>나의 루틴</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>검사하기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>병원찾기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.White,
    padding: width * 0.04,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: width * 0.045,
    color: theme.colors.Black,
  },
  weightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  weightButton: {
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.subBlue,
    borderRadius: (width * 0.1) / 2,
    marginHorizontal: width * 0.04,
  },
  weightButtonText: {
    fontSize: width * 0.06,
    color: theme.colors.mainBlue,
  },
  weightText: {
    fontSize: width * 0.06,
    color: theme.colors.Black,
  },
  note: {
    fontSize: width * 0.04,
    color: theme.colors.textDarkGray,
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  goalText: {
    fontSize: width * 0.04,
    color: theme.colors.Black,
    marginRight: width * 0.02,
  },
  goalInput: {
    flex: 1,
    height: height * 0.05,
    borderColor: theme.colors.MessageGray,
    borderWidth: 1,
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.02,
    color: theme.colors.Black,
  },
  editButton: {
    color: theme.colors.mainBlue,
    marginLeft: width * 0.02,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: height * 0.02,
  },
  tab: {
    marginHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    backgroundColor: theme.colors.subBlue,
    borderRadius: width * 0.02,
  },
  tabText: {
    color: theme.colors.mainBlue,
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartNote: {
    color: theme.colors.textGray,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: height * 0.02,
    borderTopWidth: 1,
    borderColor: theme.colors.MessageGray,
  },
  footerText: {
    color: theme.colors.mainBlue,
  },
});

export default WeightScreen;
