/**
 * @class           DesignedBy
 * @description     Displays designed by information
 * @author          Michael Lungu
 */

import React, { Component } from 'react'
import { TouchableHighlight, Text, View, StyleSheet, PixelRatio } from 'react-native'


export default class DesignedBy extends Component {


    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} onPress={() => {}}>
                    <Text style={styles.button_text}>I want an app like this one</Text>
                </TouchableHighlight>
                <Text style={styles.normalText}>Designed by <Text style={styles.designText}>Now Boarding Digital</Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15 * PixelRatio.get(),
        fontFamily: 'HelveticaNeue',
    },
    button: {
        marginBottom: 5 * PixelRatio.get(),
        borderWidth: 1 * PixelRatio.get(),
        borderRadius: 10 * PixelRatio.get(),
        alignItems: 'center',
        justifyContent: 'center',
        height: 20 * PixelRatio.get(),
        width: '100%',
        borderColor: '#e62b1e'
    },
    button_text: {
        fontFamily: 'HelveticaNeueBold',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        color: '#e62b1e',
    },
    normalText: {
        fontFamily: 'HelveticaNeue',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.09),
        color: '#000'

    },
    designText: {
        fontFamily: 'HelveticaNeueBold',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.09),
        color: '#000'
    }
})