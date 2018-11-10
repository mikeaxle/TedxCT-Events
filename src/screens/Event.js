/**
 * @class           Event
 * @description     Event screen
 * @author          Michael Lungu
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet, PixelRatio } from 'react-native'
import TabStack from '../utils/TabStack'

export default class Event extends Component {
    /**
     * @method  navigationOptions
     * @description create navigation options from route params
     * @param navigation
     * @returns {{title: *}}
     */
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('item', 'Event Details Screen').title,
            headerStyle: {
                backgroundColor: '#e62b1e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontFamily: 'HelveticaNeueBold',
                fontWeight: 'bold',
                fontSize: 9
            },
        };
    };

    render(){
        // get item from route params
        let item = this.props.navigation.state.params.item
        return (
            <TabStack />
        )
    }
}


/* <View style={styles.container}>
    <Text>An event occurs over here { item.title }</Text>
</View> */

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})