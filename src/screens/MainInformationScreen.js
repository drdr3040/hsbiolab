import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import ChronicKidneyDiseaseSection from '../components/MainInformationSection/ChronicKidneyDiseaseSection';
import DialysisSection from '../components/MainInformationSection/DialysisSection';
import MedicationSection from '../components/MainInformationSection/MedicationSection';
import DietSection from '../components/MainInformationSection/DietSection';
import WaterIntakeSection from '../components/MainInformationSection/WaterIntakeSection';
import BloodPressureSection from '../components/MainInformationSection/BloodPressureSection';
import WeightSection from '../components/MainInformationSection/WeightSection';
import BloodSugarSection from '../components/MainInformationSection/BloodSugarSection';
import CustomButton from '../components/atomic/CustomButton';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

const MainInformationScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('수분');

  const [isDetailedRisk, setIsDetailedRisk] = useState(false);

  const toggleRiskDetail = () => {
    setIsDetailedRisk(prevState => !prevState);
  };

  const [isDialysis, setIsDialysis] = useState(false);

  const toggleDialysis = () => {
    setIsDialysis(prevState => !prevState);
  };

  const [isMedication, setIsMedication] = useState(false);

  const toggleMedication = () => {
    setIsMedication(prevState => !prevState);
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case '수분':
        return <WaterIntakeSection navigation={navigation} />;
      case '혈압':
        return <BloodPressureSection navigation={navigation} />;
      case '체중':
        return <WeightSection navigation={navigation} />;
      case '혈당':
        return <BloodSugarSection navigation={navigation} />;
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <ChronicKidneyDiseaseSection 
            isDetailedRisk={isDetailedRisk} 
            toggleRiskDetail={toggleRiskDetail} 
        />
      </View>
      <View style={styles.sectionContainer}>
        <DialysisSection 
            isDialysis={isDialysis} 
            toggleDialysis={toggleDialysis} 
        />
      </View>
      <View style={styles.sectionContainer}>
        <MedicationSection 
            isMedication={isMedication}
            toggleMedication={toggleMedication}
        />
      </View>
      <View style={styles.sectionContainer}>
        <DietSection />
      </View>
      <View style={styles.tabsContainer}>
        {['수분', '혈압', '체중', '혈당'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.sectionContainer}>
        {renderActiveSection()}
      </View>
      <CustomButton
        title="프로필로 이동"
        onPress={() => navigation.navigate('Profile')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: height * 0.02,
    backgroundColor: theme.colors.backGray,
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.White,
    borderRadius: 10,
    paddingVertical: height * 0.02,
    marginBottom: height * 0.02,
    width: '90%',
  },
  tab: {
    paddingBottom: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.mainBlue,
  },
  tabText: {
    fontSize: width * 0.04,
    color: theme.colors.textGray,
  },
  activeTabText: {
    color: theme.colors.mainBlue,
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
