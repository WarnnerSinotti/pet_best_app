import React from 'react';
import { StyleSheet, Text } from 'react-native';
import themes from '../../themes';
import styled from 'styled-components/native';

export const Titulo = styled.Text`
align-items: flex-start;
justify-content: flex-start;
font-size: ${(props) => props.theme.FONT_SIZE.h6};
`;

/* export const Titulo = (props: any) => {
  return <Text style={styles.titulo} {...props} />;
}; */

export const SubTitulo = styled.Text`
align-items: flex-start;
    justify-content: flex-start;
font-size: ${(props) => props.theme.FONT_SIZE.bodySmall};
`;

/* export const SubTitulo = (props: any) => {
  return <Text style={styles.subTitulo} {...props} />;
}; */

export const SubTituloLink = styled.Text`

color: ${props => props.theme.COLORS.secundary};
  font-size: 44px;
    
`;
/* padding-right: 10,
    align-items: "flex-start",
    justifyContent: "flex-start",
    fontSfonize: ${(props) => props.theme.FONT_SIZE.bodySmall}, */

/* export const SubTituloLink = (props: any) => {
  return <Text style={styles.subTituloLink} {...props} />;
}; */

/* const styles = StyleSheet.create({
  titulo: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: themes.light.FONT_SIZE.h6,
    paddingRight: 10,
  },
  subTitulo: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: themes.light.FONT_SIZE.bodySmall,
    paddingRight: 10,
  },
  subTituloLink: {
    paddingRight: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: themes.light.FONT_SIZE.bodySmall,
    fontWeight: 'bold',
    color: themes.light.COLORS.secondary,
  },
}); */
