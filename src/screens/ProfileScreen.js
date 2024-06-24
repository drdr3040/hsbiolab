import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const ProfileScreen = () => {
  const [name, setName] = useState('김공팔');
  const [birthdate, setBirthdate] = useState('1988.08.08');
  const [gender, setGender] = useState('남성');
  const [height, setHeight] = useState('177.7 cm');
  const [weight, setWeight] = useState('66.6 kg');
  const [diagnosis, setDiagnosis] = useState('투석 전');

  const [isNameModalVisible, setNameModalVisible] = useState(false);
  const [isDateModalVisible, setDateModalVisible] = useState(false);
  const [isGenderModalVisible, setGenderModalVisible] = useState(false);
  const [isHeightModalVisible, setHeightModalVisible] = useState(false);
  const [isWeightModalVisible, setWeightModalVisible] = useState(false);
  const [isDiagnosisModalVisible, setDiagnosisModalVisible] = useState(false);

  const [tempName, setTempName] = useState(name);
  const [tempBirthdate, setTempBirthdate] = useState(new Date());
  const [tempHeight, setTempHeight] = useState(height);
  const [tempWeight, setTempWeight] = useState(weight);
  const [tempDiagnosis, setTempDiagnosis] = useState(diagnosis);

  const handleSave = () => {
    setName(tempName);
    setBirthdate(moment(tempBirthdate).format('YYYY.MM.DD'));
    setHeight(tempHeight);
    setWeight(tempWeight);
    setDiagnosis(tempDiagnosis);

    setNameModalVisible(false);
    setDateModalVisible(false);
    setGenderModalVisible(false);
    setHeightModalVisible(false);
    setWeightModalVisible(false);
    setDiagnosisModalVisible(false);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || tempBirthdate;
    setTempBirthdate(currentDate);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.title}>프로필</Text>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraIcon}>
            <Image
              source={{ uri: 'https://via.placeholder.com/24/camera-icon.png' }}
              style={styles.cameraImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.infoRow} onPress={() => setNameModalVisible(true)}>
            <Text style={styles.infoLabel}>이름</Text>
            <Text style={styles.infoValue}>{name}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoRow} onPress={() => setDateModalVisible(true)}>
            <Text style={styles.infoLabel}>생년월일</Text>
            <Text style={styles.infoValue}>{birthdate}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoRow} onPress={() => setGenderModalVisible(true)}>
            <Text style={styles.infoLabel}>성별</Text>
            <Text style={styles.infoValue}>{gender}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoRow} onPress={() => setHeightModalVisible(true)}>
            <Text style={styles.infoLabel}>키</Text>
            <Text style={styles.infoValue}>{height}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoRow} onPress={() => setWeightModalVisible(true)}>
            <Text style={styles.infoLabel}>몸무게</Text>
            <Text style={styles.infoValue}>{weight}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoRow} onPress={() => setDiagnosisModalVisible(true)}>
            <Text style={styles.infoLabel}>만성콩팥병 진단</Text>
            <Text style={styles.infoValue}>{diagnosis}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>저장</Text>
        </TouchableOpacity>
      </View>

      {/* Name Modal */}
      <Modal visible={isNameModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>이름 변경</Text>
            <TextInput
              style={styles.input}
              value={tempName}
              onChangeText={setTempName}
            />
            <Button title="저장" onPress={handleSave} />
            <Button title="취소" onPress={() => setNameModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Date Modal */}
      <Modal visible={isDateModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>생년월일 변경</Text>
            <DateTimePicker
              value={tempBirthdate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
            <Button title="저장" onPress={handleSave} />
            <Button title="취소" onPress={() => setDateModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Gender Modal */}
      <Modal visible={isGenderModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>성별 변경</Text>
            <Button title="남성" onPress={() => { setGender('남성'); setGenderModalVisible(false); }} />
            <Button title="여성" onPress={() => { setGender('여성'); setGenderModalVisible(false); }} />
            <Button title="취소" onPress={() => setGenderModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Height Modal */}
      <Modal visible={isHeightModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>키 변경</Text>
            <TextInput
              style={styles.input}
              value={tempHeight}
              onChangeText={setTempHeight}
              keyboardType="numeric"
            />
            <Button title="저장" onPress={handleSave} />
            <Button title="취소" onPress={() => setHeightModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Weight Modal */}
      <Modal visible={isWeightModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>몸무게 변경</Text>
            <TextInput
              style={styles.input}
              value={tempWeight}
              onChangeText={setTempWeight}
              keyboardType="numeric"
            />
            <Button title="저장" onPress={handleSave} />
            <Button title="취소" onPress={() => setWeightModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Diagnosis Modal */}
      <Modal visible={isDiagnosisModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>만성콩팥병 진단 변경</Text>
            <TextInput
              style={styles.input}
              value={tempDiagnosis}
              onChangeText={setTempDiagnosis}
            />
            <Button title="저장" onPress={handleSave} />
            <Button title="취소" onPress={() => setDiagnosisModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0D4F0',
  },
  profileContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 5,
  },
  cameraImage: {
    width: 24,
    height: 24,
  },
  infoContainer: {
    marginVertical: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  infoLabel: {
    fontSize: 16,
  },
  infoValue: {
    fontSize: 16,
    color: '#666',
  },
  saveButton: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 20,
  },
});

export default ProfileScreen;
