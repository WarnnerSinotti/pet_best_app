import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import themes from '../../themes';

export const MyButton = (props: any) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.textButton} {...props} />
    </TouchableOpacity>
  );
};

export const MyButtonGoogle = (props: any) => {
  return (
    <TouchableOpacity style={styles.buttonSocial} {...props}>
      <Text style={styles.textButtonSocial} {...props} />
    </TouchableOpacity>
  );
};

export const MyButtonApple = (props: any) => {
  return (
    <TouchableOpacity style={styles.buttonSocial} {...props}>
      <Text style={styles.textButtonSocial} {...props} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 342,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: themes.light.COLORS.secondary,
  },
  textButton: {
    fontSize: themes.light.FONT_SIZE.button,
    color: themes.light.COLORS.color,
  },
  buttonSocial: {
    marginTop: 10,
    width: 342,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: themes.light.COLORS.neutral,
  },
  textButtonSocial: {
    fontSize: themes.light.FONT_SIZE.bodySmall,
    color: 'grey'
  }
});
