/**
 * @class           Programme
 * @description     Programme screen
 * @author          Michael Lungu
 */

import React, {Component} from 'react'
import {View, StyleSheet, ScrollView, PixelRatio} from 'react-native'
import Schedule from '../components/Schedule'
import Social from '../components/Social'
import DesignedBy from '../components/DesignedBy'

export default class Programme extends Component {

    constructor(props){
        super(props)

    }


    render() {
        return (

            <View style={styles.container}>
                <ScrollView>
                    <Schedule date={this.props.navigation.getParam('item', '11 November 2018').date}/>
                    <View style={{paddingHorizontal: 15 * PixelRatio.get()}}>
                        <Social color={'white'}/>
                        <DesignedBy color={'white'}/>
                    </View>
                </ScrollView>
            </View>

        )
    }
}

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        paddingBottom: 18.5 * PixelRatio.get()
    }
})