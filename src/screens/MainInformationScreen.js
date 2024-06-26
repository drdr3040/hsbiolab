import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import ChronicKidneyDiseaseSection from '../components/MainInformationSection/ChronicKidneyDiseaseSection';
import DialysisSection from '../components/MainInformationSection/DialysisSection';
import MedicationSection from '../components/MainInformationSection/MedicationSection';
import DietSection from '../components/MainInformationSection/DietSection';
import WaterIntakeSection from '../components/MainInformationSection/WaterIntakeSection';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const MainInformationScreen = ({ navigation }) => {
  const [isDetailedRisk, setIsDetailedRisk] = useState(false);
  const [isDialysis, setIsDialysis] = useState(false);
  const [isMedication, setIsMedication] = useState(false);
  const [activeTab, setActiveTab] = useState('수분');

  const toggleRiskDetail = () => setIsDetailedRisk(!isDetailedRisk);
  const toggleDialysis = () => setIsDialysis(!isDialysis);
  const toggleMedication = () => setIsMedication(!isMedication);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <ChronicKidneyDiseaseSection isDetailedRisk={isDetailedRisk} toggleRiskDetail={toggleRiskDetail} />
      </View>
      <View style={styles.sectionContainer}>
        <DialysisSection isDialysis={isDialysis} toggleDialysis={toggleDialysis} />
      </View>
      <View style={styles.sectionContainer}>
        <MedicationSection isMedication={isMedication} toggleMedication={toggleMedication} />
      </View>
      <View style={styles.sectionContainer}>
        <DietSection />
      </View>
      <View style={styles.sectionContainer}>
        <WaterIntakeSection activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>프로필 설정</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: height * 0.02,
    backgroundColor: theme.colors.backGray,
    alignItems: 'center',
  },
  sectionContainer: {
    width: '90%',
    marginBottom: height * 0.02,
  },
  button: {
    width: '80%',
    height: height * 0.06,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  buttonText: {
    color: theme.colors.White,
    fontSize: width * 0.045,
  },
});

export default MainInformationScreen;
