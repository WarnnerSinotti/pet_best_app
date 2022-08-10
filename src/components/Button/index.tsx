import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import themes from '../../themes';

export const MyButtonLogin = (props: any) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.textButton}{...props} />
    </TouchableOpacity>
    //<Button Style={styles.button} mode="contained" {...props}/>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    margin: '1%',
    backgroundColor: '#7777',
  },
  textButton: {
    color: themes.light.secondary,
  },
});
