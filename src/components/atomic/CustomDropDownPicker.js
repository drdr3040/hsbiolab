// src/components/CustomDropDownPicker.js
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomDropDownPickerStyles from '../../design/CustomDropDownPickerStyles';

const CustomDropDownPicker = ({ open, value, items, setOpen, setValue, setItems }) => {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownDirection="TOP"
      zIndex={5000}
      containerStyle={CustomDropDownPickerStyles.dropdown}
    />
  );
};

export default CustomDropDownPicker;
