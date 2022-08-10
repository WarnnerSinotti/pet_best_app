import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Container = (props: any) => {
    return (
        <View style={styles.container} {...props} />
    )
}

export const Row = (props: any) => {
    return (
        <View style={styles.row} {...props} />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        //backgroundColor: "red",
        justifyContent: 'center'
    },

  });