import React from 'react';
import { StyleSheet, TextInput, Text, Image } from 'react-native';
import themes from '../../themes';

export const TextInputEmail = (props: any) => {
  return (
    <TextInput style={styles.input} {...props}>
      <Text style={styles.textButton} {...props} />
    </TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 342,
    height: 40,
    borderRadius: 8,
    borderColor: themes.light.COLORS.neutral,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textButton: {
    fontSize: themes.light.FONT_SIZE.button,
    color: themes.light.COLORS.quartenary,
  },
});
