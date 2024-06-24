import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import theme from '../theme';

const MainInformationScreen = () => {
  const [isDialysis, setIsDialysis] = useState(true);

  const toggleDialysis = () => {
    setIsDialysis(!isDialysis);
  };

  return (
    <ScrollView style={styles.container}>
      {/* 만성신부전 위험도 섹션 */}
      <View style={styles.section}>
        <Text style={styles.title}>나의 만성신부전 위험도는 몇 단계?</Text>
        <Text style={styles.subtitle}>지금 키트로 검사하고 만성 신부전 위험도를 알아보세요.</Text>
        <Text style={styles.warning}>위험 섬세한 관리가 필요한 단계예요.</Text>
      </View>

      {/* 투석 여부 섹션 */}
      <View style={styles.section}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>김소영님, 혹시 투석중이신가요?</Text>
            <TouchableOpacity onPress={toggleDialysis}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>투석 루틴을 등록하시면 투석날을 관리할 수 있어요.</Text>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>투석</Text>
            <Text style={styles.rowValue}>오전 11:30</Text>
          </View>
          <Text style={styles.note}>메모 여의도성모병원</Text>
        </View>
      </View>

      {/* 복약 섹션 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>복약</Text>
        <Text style={styles.sectionSubtitle}>약 루틴을 등록하고 복약 관리를 해보세요!</Text>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>복약 진행률: 0%</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '0%' }]} />
          </View>
        </View>
      </View>

      {/* 식단 섹션 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>식단</Text>
        {['탄수화물', '단백질', '지방', '나트륨', '칼륨', '인'].map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.rowLabel}>{item}</Text>
            <Text style={styles.rowValue}>0/200g</Text>
          </View>
        ))}
        <Text style={styles.sectionSubtitle}>식단을 잘 관리하여 건강을 유지하세요!</Text>
      </View>

      {/* 수분 섹션 */}
      <View style={styles.section}>
        <View style={styles.tabs}>
          <Text style={styles.tab}>수분</Text>
          <Text style={styles.tabInactive}>혈압</Text>
          <Text style={styles.tabInactive}>체중</Text>
          <Text style={styles.tabInactive}>혈당</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>총 수분량</Text>
          <Text style={styles.rowValue}>?잔/5잔</Text>
        </View>
        <Text style={styles.note}>수분을 기록해보세요!</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>수분 섭취 기록</Text>
          {Array(10)
            .fill('')
            .map((_, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.rowLabel}>날짜 {index + 1}</Text>
                <Text style={styles.rowValue}>{Math.floor(Math.random() * 5)}잔</Text>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backGray,
    padding: 16,
  },
  section: {
    backgroundColor: theme.colors.White,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.Black,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: theme.colors.Black,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
    marginBottom: 8,
  },
  warning: {
    fontSize: 14,
    color: theme.colors.textRed,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: theme.colors.Black,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.MessageGray,
  },
  rowLabel: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
  },
  rowValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.Black,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 16,
    paddingVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.mainBlue,
    color: theme.colors.mainBlue,
  },
  tabInactive: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 16,
    paddingVertical: 4,
    color: theme.colors.NavBar,
  },
  note: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
    textAlign: 'center',
    marginTop: 16,
  },
  progressContainer: {
    marginVertical: 16,
  },
  progressText: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
    marginBottom: 8,
  },
  progressBar: {
    height: 10,
    backgroundColor: theme.colors.MessageGray,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.mainBlue,
  },
});

export default MainInformationScreen;
