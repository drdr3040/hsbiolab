import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme';

const DialysisSection = ({ isDialysis, toggleDialysis }) => {
  return (
    <View style={styles.section}>
      {isDialysis ? (
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>김소영님, 오늘은 투석날이에요.</Text>
            <TouchableOpacity onPress={toggleDialysis}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>투석</Text>
            <Text style={styles.rowValue}>오전 11:30</Text>
          </View>
          <Text style={styles.note}>메모 여의도성모병원</Text>
        </View>
      ) : (
        <>
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
          <TouchableOpacity style={styles.button} onPress={toggleDialysis}>
            <Text style={styles.buttonText}>상세보기</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  note: {
    fontSize: 14,
    color: theme.colors.textDarkGray,
    textAlign: 'center',
    marginTop: 16,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: theme.colors.White,
    fontSize: 14,
  },
});

export default DialysisSection;
