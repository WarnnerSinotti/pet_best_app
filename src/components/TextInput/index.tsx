import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import themes from '../../themes';
import Ionicons from '@expo/vector-icons/Ionicons';
import Mail from '../../../assets/icons/mail.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const TextInputEmail = (props: any) => {
  return (
    <View>
    <TextInput style={styles.input} {...props}>
      <Ionicons name='mail' size={17} color={'red'} style={styles.icon} {...props}/>
      <TouchableOpacity>
      <Ionicons name='mail' size={17} color={'red'} style={styles.icon} {...props}/>
      </TouchableOpacity>
      <Text style={styles.textButton} {...props} />
    </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 342,
    height: 40,
    borderRadius: 8,
    borderColor: themes.light.COLORS.neutral,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textButton: {
    fontSize: themes.light.FONT_SIZE.button,
    color: themes.light.COLORS.quartenary,
  },
  icon: {
    position: 'absolute',
    left: 30,
    top: 12,
  }
});
