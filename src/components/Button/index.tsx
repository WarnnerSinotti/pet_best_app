import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native';
import themes from '../../themes';
import Google from '../../../assets/icons/google.svg';
import Apple from '../../../assets/icons/apple.svg';
import styled from 'styled-components/native';

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
      <Google height={25} width={25} />
      <Text style={styles.textButtonSocial} {...props} />
    </TouchableOpacity>
  );
};

export const MyButtonApple = (props: any) => {
  return (
    <TouchableOpacity style={styles.buttonSocial} {...props}>
      <Apple height={25} width={25} />
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
    color: themes.light.COLORS.whiteBackground, //mudar esta cor
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
    color: 'grey',
  },
});

export const Wrapper = styled.View`
  background: ${(props) => props.theme.COLORS.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.COLORS.color};
  font-size: 44px;
`;

export const MyRS = styled.Button`
  background: ${(props) => props.theme.COLORS.secondary};
  color: ${(props) => props.theme.COLORS.primary};
  flex-direction: row;
  margin-top: 10;
  width: 342;
  height: 44%;
  justify-content: center;
  align-items: center;
  border-radius: 8;
`;
