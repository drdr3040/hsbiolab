import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import images from '../../../assets/icons/images';

const FloatingMenu = () => {
  return (
    <View style={styles.menu}>
      <View style={styles.menuItem}>
        <Image source={images.식단} style={styles.icon} />
        <Text style={styles.menuText}>식단</Text>
      </View>
      <View style={styles.menuItem}>
        <Image source={images.수분} style={styles.icon} />
        <Text style={styles.menuText}>수분</Text>
      </View>
      <View style={styles.menuItem}>
        <Image source={images.체중} style={styles.icon} />
        <Text style={styles.menuText}>체중</Text>
      </View>
      <View style={styles.menuItem}>
        <Image source={images.혈압} style={styles.icon} />
        <Text style={styles.menuText}>혈압</Text>
      </View>
      <View style={styles.menuItem}>
        <Image source={images.혈당} style={styles.icon} />
        <Text style={styles.menuText}>혈당</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    right: 30,
    bottom: 100,
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  menuText: {
    fontSize: 18,
  },
});

export default FloatingMenu;
