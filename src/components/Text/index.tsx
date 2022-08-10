import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const TitleLogo = (props: any) => {
  return <Text style={styles.titleLogo} {...props} />;
};

export const Titulo = (props: any) => {
    return <Text style={styles.titulo} {...props} />;
  };

const styles = StyleSheet.create({
  titleLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    backgroundColor: 'red',
  },
  titulo: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 22,
  },
});
