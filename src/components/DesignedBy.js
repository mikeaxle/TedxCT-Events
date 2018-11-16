/**
 * @class           DesignedBy
 * @description     Displays designed by information
 * @author          Michael Lungu
 */

import React, { Component } from 'react'
import {TouchableHighlight, Text, View, StyleSheet, PixelRatio, Linking, TouchableNativeFeedback} from 'react-native'

let color = 'white'
export default class DesignedBy extends Component {
    constructor(props){
        super(props)
        color = this.props.color
    }


    render(){
        return(
            <View style={styles.container}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}
                                         onPress={() => Linking.openURL('https://www.nowboarding.co.za')}>
                    <View style={styles.button}>
                        <Text style={styles.button_text}>I want an app like this one</Text>
                    </View>

                </TouchableNativeFeedback>
                <Text style={[styles.normalText, { color: this.props.color }]}>Designed by <Text style={[styles.designText, { color: this.props.color }]}>Now Boarding Digital</Text></Text>
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

    },
    designText: {
        fontFamily: 'HelveticaNeueBold',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.09),
    }
})