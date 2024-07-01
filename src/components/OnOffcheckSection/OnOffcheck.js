import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SwitchButton from '../atomic/SwitchButton';
import images from '../../assets/icons/images';

const OnOffcheck = ({ style }) => {
  const [isPut, setisPut] = useState(false);

  const toggle = () => {
    setisPut(!isPut);
  };

  return (
    <SafeAreaView style= {[styles.container, style]}>
      <View style={styles.content}>
        <SwitchButton
          onPress={toggle}
          icon={isPut ? images.bluecheck : images.checkbox}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnOffcheck;
