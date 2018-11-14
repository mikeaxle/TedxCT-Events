/**
 * @class           Icon
 * @description     Displays icon with text next to it
 * @author          Michael Lungu
 */

import React, { Component } from 'react'
import { Text, Image, View, StyleSheet, PixelRatio, Dimensions } from 'react-native'
export default class Icon extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.icon}/>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 3 * PixelRatio.get(),

    },
    text: {
        fontFamily: 'HelveticaNeueBold',
        color: '#e62b1e',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
        // fontWeight: 'bold',
        letterSpacing: -0.09
    }
})