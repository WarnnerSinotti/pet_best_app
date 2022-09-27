import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Image, View } from 'react-native';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { MyButtonTextSubmit } from '../Button';
import { CardLocalizationIntern } from '../Card/CardLocalization';
import { IconMapPin } from '../SVG';
import themes from '../../themes';
import { RowLeft } from '../Global';
import { NewPetFriendText } from '../Text';
import Geolocation from '@react-native-community/geolocation';

const icon = require('../../../assets/icon.png');

export default function MyMap() {
  const [currentRegion, setCurrentRegion] = useState();

  useEffect(() => {
    async function loadInicialPosicao() {
      const { granted } = await requestForegroundPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    }
    loadInicialPosicao();
  }, []);

  if (!currentRegion) {
    return null;
  }
  return (
    <MapView initialRegion={currentRegion} style={styles.map}
    >
      <Marker coordinate={{ latitude: -22.3289895, longitude: -47.3827215 }}>
        <CardLocalizationIntern>
          <RowLeft>
          <NewPetFriendText>Your Location</NewPetFriendText>
          </RowLeft>
          <RowLeft style={{paddingTop: 10}}>
          <NewPetFriendText >
            <IconMapPin style={{ color: themes.light.COLORS.secondary }} />S
            Brevard ST, 223. Charlotte - NC
          </NewPetFriendText>
          </RowLeft>
        </CardLocalizationIntern>
        <Callout>
          <View>
            <MyButtonTextSubmit>Warnner TEXT</MyButtonTextSubmit>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF50'
  },
});
