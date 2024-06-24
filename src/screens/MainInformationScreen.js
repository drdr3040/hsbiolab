import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import ChronicKidneyDiseaseSection from '../components/ChronicKidneyDiseaseSection';
import DialysisSection from '../components/DialysisSection';
import MedicationSection from '../components/MedicationSection';
import WaterIntakeSection from '../components/WaterIntakeSection';
import DietSection from '../components/DietSection';

const MainInformationScreen = () => {
  const [isDetailedRisk, setIsDetailedRisk] = useState(false);
  const [isDialysis, setIsDialysis] = useState(false);
  const [isMedication, setIsMedication] = useState(false);
  const [activeTab, setActiveTab] = useState('수분');

  const toggleRiskDetail = () => setIsDetailedRisk(!isDetailedRisk);
  const toggleDialysis = () => setIsDialysis(!isDialysis);
  const toggleMedication = () => setIsMedication(!isMedication);

  return (
    <ScrollView>
      <ChronicKidneyDiseaseSection isDetailedRisk={isDetailedRisk} toggleRiskDetail={toggleRiskDetail} />
      <DialysisSection isDialysis={isDialysis} toggleDialysis={toggleDialysis} />
      <MedicationSection isMedication={isMedication} toggleMedication={toggleMedication} />
      <DietSection />
      <WaterIntakeSection activeTab={activeTab} setActiveTab={setActiveTab} />
    </ScrollView>
  );
};

export default MainInformationScreen;
