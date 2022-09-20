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
    width: '100%',
    backgroundColor: themes.light.COLORS.neutral,
  },
});
