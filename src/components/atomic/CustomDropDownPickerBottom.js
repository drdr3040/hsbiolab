// src/components/CustomDropDownPicker.js
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../styles/CustomDropDownPickerStyles';

const CustomDropDownPickerBottom = ({ open, value, items, setOpen, setValue, setItems }) => {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownDirection="BOTTOM"
      zIndex={5000}
      containerStyle={styles.dropdown}
    />
  );
};

export default CustomDropDownPickerBottom;
