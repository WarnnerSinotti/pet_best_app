import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import themes from '../../themes';

const DATA = [
  {
    id: '1',
    title: 'Shop',
    //button: () =>  console.log('01')
  },
  {
    id: '2',
    title: 'Clinic',
    //button: () => console.log('02')
  },
  {
    id: '3',
    title: 'Services',
    //button: () => console.log('03')
  },
];

interface ItemProps {
  item: any;
  onPress: () => void;
  backgroundColor: any;
  textColor: any;
}

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity onPress={onPress}  style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const MenuListHorizontal = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedButton, setSelectedButton] = useState(1);

  const renderItem = ({ item }: ItemProps) => {
    const backgroundColor =
      item.id === selectedId
        ? themes.light.COLORS.secondary
        : themes.light.COLORS.neutral;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 30,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  title: {
    fontSize: 32,
  },
});

export default MenuListHorizontal;
