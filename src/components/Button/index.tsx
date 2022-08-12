import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native';
import themes from '../../themes';
import Google from '../../../assets/icons/google.svg';
import Apple from '../../../assets/icons/apple.svg';

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
    <Google height={25} width={25}/>
      <Text style={styles.textButtonSocial} {...props} />
    </TouchableOpacity>
  );
};

export const MyButtonApple = (props: any) => {
  return (
    <TouchableOpacity style={styles.buttonSocial} {...props}>
      <Apple height={25} width={25}/>
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
    flexDirection: 'row',
    marginTop: 10,
    width: 342,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: themes.light.COLORS.neutral,
  },
  textButtonSocial: {
    padding: 12,
    fontSize: themes.light.FONT_SIZE.bodySmall,
    color: 'grey'
  }
});
