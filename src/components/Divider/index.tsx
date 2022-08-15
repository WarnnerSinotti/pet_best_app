import { Divider } from '@react-native-material/core';
import React from 'react';
import { StyleSheet } from 'react-native';
import themes from '../../themes';

export const MyDivider = (props: any) => {
  return <Divider style={styles.divider} {...props} />;
};


const styles = StyleSheet.create({
  divider: {
    height: 2,
    width: 147,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: themes.light.COLORS.neutral,
  },
});
