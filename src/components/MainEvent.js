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
        this.state = {
            image: require('../assets/image/eventmain.png') //require(props.item.image)
        }
    }

    _onPress(){
        this.props.onPressItem()
    }

    /**
     * Returns JSX
     * @returns {*}
     */
    render(){
        return(
            <TouchableHighlight onPress={this._onPress.bind(this)}>
                <ImageBackground source={ this.state.image } style={styles.container}>
                    <View style={styles.icon_container}>
                        <Icon image={mainEventIcon} text={this.props.item.date.toUpperCase()} />
                        <View style={styles.spacer}></View>
                        <Icon image={mainEventIcon2} text={this.props.item.venue.toUpperCase()} />
                    </View>
                </ImageBackground>
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