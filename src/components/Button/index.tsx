import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native';
import themes from '../../themes';
import Google from '../../../assets/icons/google.svg';
import Apple from '../../../assets/icons/apple.svg';
import styled from 'styled-components/native';

export const MyButton = styled.TouchableOpacity`
  width: 100%;
  height: 44px;
  flex-direction: row;
  justify-content: center;
  background-color: ${(props: any) => props.theme.COLORS.secondary};
  align-items: center;  
  border-radius: 8px;
`;

export const MyButtonText = styled.Text`
  color: ${(props: any) => props.theme.COLORS.color};
  font-size: ${(props: any) => props.theme.FONT_SIZE.button};
`

export const MyByttonSocial = styled(MyButton)`
  background-color: ${(props: any) => props.theme.COLORS.neutral};
`;
