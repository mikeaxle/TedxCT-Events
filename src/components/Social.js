/**
 * @class           Social
 * @description     Social media follow buttons
 * @author          Michael Lungu
 */

import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    PixelRatio,
    Linking,
    TouchableWithoutFeedback
} from 'react-native'

export default class Social extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={[styles.text, { color: this.props.color }]}>Follow TEDx CapeTown</Text>
                <View style={styles.icon_container}>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.facebook.com/TEDxCapeTown/')}>
                        <Image style={styles.icon} source={icons.facebook}/>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://twitter.com/tedxcapetown')}>
                        <Image style={styles.icon} source={icons.twitter}/>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.instagram.com/tedxcapetown/')}>
                        <Image style={styles.icon} source={icons.instagram}/>
                    </TouchableWithoutFeedback>
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
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        fontFamily: 'HelveticaNeue',
    },
    icon_container: {
        marginTop: 20 * PixelRatio.get(),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        // marginLeft: 8.75 * PixelRatio.get(),
        marginHorizontal: 8.75 * PixelRatio.get(),
        height: 15 * PixelRatio.get(),
        width: 15 * PixelRatio.get(),
        resizeMode: 'stretch'
    }
})