/**
 * @class           Social
 * @description     Social media follow buttons
 * @author          Michael Lungu
 */

import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, PixelRatio } from 'react-native'

export default class Social extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Follow TEDx CapeTown</Text>
                <View style={styles.icon_container}>
                    <Image style={styles.icon} source={icons.facebook}/>
                    <Image style={styles.icon} source={icons.twitter}/>
                    <Image style={styles.icon} source={icons.instagram}/>
                </View>
            </View>
        )
    }
}

//icons
var icons = {
    facebook: require('../assets/icn/social-fb.png'),
    twitter: require('../assets/icn/social-tweet.png'),
    instagram: require('../assets/icn/social-instagram.png')
}

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 25 * PixelRatio.get()
    },
    text: {
        color: 'black'
    },
    icon_container: {
        marginTop: 20 * PixelRatio.get(),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        marginLeft: 8.75 * PixelRatio.get(),
        marginRight: 8.75 * PixelRatio.get(),
        height: 15 * PixelRatio.get(),
        width: 15 * PixelRatio.get(),
        resizeMode: 'contain'
    }
})