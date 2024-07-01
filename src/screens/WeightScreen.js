import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigationBar from '../navigation/BottomNavigationBar';
import theme from '../theme';

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
      <View style={styles.header}>
        <Button title="닫기" onPress={() => navigation.goBack()} />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.White,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    color: theme.colors.Black,
  },
  weightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  weightButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.subBlue,
    borderRadius: 20,
    marginHorizontal: 16,
  },
  weightButtonText: {
    fontSize: 24,
    color: theme.colors.mainBlue,
  },
  weightText: {
    fontSize: 24,
    color: theme.colors.Black,
  },
  note: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
    textAlign: 'center',
    marginBottom: 16,
  },
  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  goalText: {
    fontSize: 16,
    color: theme.colors.Black,
    marginRight: 8,
  },
  goalInput: {
    flex: 1,
    height: 40,
    borderColor: theme.colors.MessageGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: theme.colors.Black,
  },
  editButton: {
    color: theme.colors.mainBlue,
    marginLeft: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  tab: {
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.subBlue,
    borderRadius: 8,
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
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: theme.colors.MessageGray,
  },
  footerText: {
    color: theme.colors.mainBlue,
  },
});

export default WeightScreen;
