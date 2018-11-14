/**
 * @class           MainEvent
 * @description     Displays main event item
 * @author          Michael Lungu
 */


import React, { Component } from 'react'
import {ImageBackground, Alert, Image, View, StyleSheet, PixelRatio, TouchableHighlight} from 'react-native'
import Icon from './Icon'


export default class MainEvent extends Component {
    constructor(props){
        super(props)
    }

    /**
     * Returns JSX
     * @returns {*}
     */
    render(){
        return(
            <TouchableHighlight onPress={() => Alert.alert('it is ' + this.props.id)}>
                <ImageBackground source={mainEventImage} style={styles.container}>
                    <View style={styles.icon_container}>
                        <Icon image={mainEventIcon} text={`11 NOVEMBER 2018`} />
                        <View style={styles.spacer}></View>
                        <Icon image={mainEventIcon2} text={'AVENUE V&A WATERFRONT'} />
                    </View>
                </ImageBackground>
            </TouchableHighlight>
        )
    }
}

// images
var mainEventImage = require('../assets/image/event-main.png')
var mainEventIcon = require('../assets/icn/date-small-red.png')
var mainEventIcon2 = require('../assets/icn/location-small-red.png')


// styles
const styles = StyleSheet.create({
    container: {
        height: 150 * PixelRatio.get(),
        justifyContent: 'flex-end',
        padding: 5.5 * PixelRatio.get(),
    },
    icon_container: {

        flexDirection: 'row',
        justifyContent: 'center'
    },
    spacer: {
        marginLeft: 9.5 * PixelRatio.get()
    }
})