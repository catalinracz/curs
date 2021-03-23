import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'rgb(255, 0, 0)'
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'rgb(0, 255, 0)',
        marginTop: 100,
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'rgb(0, 0, 255)'
    }
});

export default BoxScreen;