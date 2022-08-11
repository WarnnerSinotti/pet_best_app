import { Button, Text } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Container } from '../../components/Global';

export default function Menu() {

  const navigation = useNavigation();

  return (
    <Container>
      <Text>MENU</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </Container>
  );
}
