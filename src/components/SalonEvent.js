/**
 * @class           SalonEvent
 * @description     Displays salon event item
 * @author          Michael Lungu
 */


import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, PixelRatio, TouchableHighlight, Alert} from 'react-native'
import Icon from './Icon'

export default class SalonEvent extends Component {
    constructor(props){
        super(props)
    }

    _onPress(){
        this.props.onPressItem()
    }

    render(){
        return(
            <TouchableHighlight elevation={6} style={styles.container} onPress={this._onPress.bind(this)}>
                <View>
                    <Image source={this.props.image} style={styles.image}/>
                    <View style={{  height: 38.5 * PixelRatio.get(), }}>
                        <Text style={styles.heading}>{this.props.title}</Text>
                        <View style={styles.icon_container}>
                            <Icon image={mainEventIcon} text={this.props.date} />
                            <View style={styles.spacer}></View>
                            <Icon image={mainEventIcon2} text={this.props.venue} />
                        </View>
                    </View>

                </View>
            </TouchableHighlight>
        )
    }
}

// images
var mainEventIcon = require('../assets/icn/date-small-red.png')
var mainEventIcon2 = require('../assets/icn/location-small-red.png')

// styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: 15 * PixelRatio.get(),
        paddingBottom: 5 * PixelRatio.get()
    },
    image: {
        resizeMode: 'cover',
        height: 70.5 * PixelRatio.get(),
        width: '100%'
    },
    heading: {
        fontFamily: 'HelveticaNeueBold',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(11),
        textAlign: 'center',
        marginTop: 7.5 * PixelRatio.get(),
        marginBottom: 6  * PixelRatio.get(),
        color: 'black'
    },
    icon_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    spacer: {
        marginLeft: 9.5 * PixelRatio.get()
    }
})