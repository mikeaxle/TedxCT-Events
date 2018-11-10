/**
 * @class           Partners
 * @description     Partners screen
 * @author          Michael Lungu
 */

import React, { Component } from 'react'
import {View, StyleSheet, ScrollView, PixelRatio, Image, FlatList } from 'react-native'
import Sponsors from '../components/Sponsors'
import Social from '../components/Social'
import DesignedBy from '../components/DesignedBy'

export default class Partners extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { navigation } = this.props
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.hero_image} source={navigation.state.params.item.image} />
                </View>
                <Sponsors />
                <Social />
                <DesignedBy/>
            </ScrollView>
        )
    }
}


// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    hero_image: {
        height: 125 * PixelRatio.get(),
        width: '100%',
        resizeMode: 'cover'
    },

})