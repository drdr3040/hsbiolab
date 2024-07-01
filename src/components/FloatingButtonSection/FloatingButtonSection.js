import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import FloatingMenu from '../menu/FloatingMenu';
import images from '../../assets/icons/images';
import SwitchButton from '../atomic/SwitchButton';

const FloatingButton = ( {style} ) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={styles.content}>
        {menuVisible && <FloatingMenu />}
        <SwitchButton
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

export default FloatingButton;
