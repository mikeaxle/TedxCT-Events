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
                <Text>Designed by <Text style={styles.designText}>Now Boarding Digital</Text></Text>
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
        paddingLeft: 15 * PixelRatio.get(),
        paddingRight: 15 * PixelRatio.get(),
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
        color: '#e62b1e',
        fontSize: 15 * PixelRatio.getFontScale()
    },
    designText: {
        fontWeight: 'bold',
        color: '#000'
    }
})