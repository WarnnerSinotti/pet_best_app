import React from 'react';
import { StyleSheet, Text } from 'react-native';
import themes from '../../themes';

export const Titulo = (props: any) => {
    return <Text style={styles.titulo} {...props} />;
  };

  export const SubTitulo = (props: any) => {
    return <Text style={styles.subTitulo} {...props} />;
  };

  export const SubTituloLink = (props: any) => {
    return <Text style={styles.subTituloLink} {...props} />;
  };


const styles = StyleSheet.create({
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
});
