/* eslint-disable prettier/prettier */
import {View, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  disabled,
  right,
  left,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        disabled={disabled}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        right={right}
        left={left}
        underlineColor={'transparent'}
        activeUnderlineColor={'transparent'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e8e8e8',
    marginVertical: 5,
  },
  input: {
    height: 50,
  },
});
export default CustomInput;
