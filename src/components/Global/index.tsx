import React from 'react';
import { StyleSheet, View } from 'react-native';
import themes from '../../themes';

export const Container = (props: any) => {
    return (
        <View style={styles.container} {...props} />
    )
}

export const Column = (props: any) => {
    return (
        <View style={styles.column} {...props} />
    )
}

export const Row = (props: any) => {
    return (
        <View style={styles.row} {...props} />
    )
}

export const RowDivider = (props: any) => {
    return (
        <View style={styles.rowDivider} {...props} />
    )
}

export const RowCenter = (props: any) => {
    return (
        <View style={styles.rowCenter} {...props} />
    )
}

export const RowLeft = (props: any) => {
    return (
        <View style={styles.rowLeft} {...props} />
    )
}

export const RowRight = (props: any) => {
    return (
        <View style={styles.rowRight} {...props} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        paddingHorizontal: 15,
        width: '100%',
        flexDirection: 'row',
    },
    rowDivider:{
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowCenter: {
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    rowLeft: {
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10
    },
    rowRight: {
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10
    },

  });