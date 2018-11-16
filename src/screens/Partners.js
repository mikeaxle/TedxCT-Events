/**
 * @class           Partners
 * @description     Partners screen
 * @author          Michael Lungu
 */

import React, {Component} from 'react'
import {View, StyleSheet, ScrollView, PixelRatio, Image, FlatList} from 'react-native'
import Sponsors from '../components/Sponsors'
import Social from '../components/Social'
import DesignedBy from '../components/DesignedBy'

export default class Partners extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heroImage: require('../assets/image/eventmain.png')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Image style={styles.hero_image} source={this.state.heroImage}/>

                    <Sponsors/>
                    <Social/>
                    <View style={{paddingBottom: 15 * PixelRatio.get(), paddingHorizontal: 15 * PixelRatio.get()}}>
                        <DesignedBy/>
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
        backgroundColor: 'white'
    },
    hero_image: {
        height: 125 * PixelRatio.get(),
        width: '100%',
        resizeMode: 'cover'
    },

})