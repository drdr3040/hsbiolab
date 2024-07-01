import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import FloatingButton from '../atomic/FloatingButton';
import FloatingMenu from '../menu/FloatingMenu';
import images from '../../assets/icons/images';

const FloatingButtonSection = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {menuVisible && <FloatingMenu />}
        <FloatingButton
          onPress={toggleMenu}
          icon={menuVisible ? images.Xbutton : images.plusbutton}
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

export default FloatingButtonSection;
