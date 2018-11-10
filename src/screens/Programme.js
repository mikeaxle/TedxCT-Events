/**
 * @class           Programme
 * @description     Programme screen
 * @author          Michael Lungu
 */

import React, { Component } from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import Schedule from '../components/Schedule'
import Social from '../components/Social'
import DesignedBy from '../components/DesignedBy'

export default class Programme extends Component {


    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Schedule />
                    <Social />
                    <DesignedBy/>
                </View>
            </ScrollView>
        )
    }
}

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
})