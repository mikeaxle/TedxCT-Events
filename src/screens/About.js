/**
 * @class           About
 * @description     About screen
 * @author          Michael Lungu
 */

import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, PixelRatio, ScrollView} from 'react-native'
import Map from '../components/Map'
import Social from '../components/Social'
import DesignedBy from '../components/DesignedBy'

export default class About extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { navigation } = this.props
        return (
            <ScrollView>
            <View style={styles.container}>
                <Image style={styles.hero_image} source={navigation.state.params.item.image}/>
                <View style={styles.meta_container}>

                    {/* date */}
                    <View style={styles.icon_container}>
                        <Image style={styles.icon} source={icons.calendar}/>
                        <View style={styles.spacer} />
                        <View style={styles.icon_container_text_container}>
                            <Text style={styles.meta_heading}>{navigation.state.params.item.date}</Text>
                            <Text style={styles.meta_paragraph}>08:30 - 17:00</Text>
                            <Text style={styles.meta_link}>Add to Calendar</Text>
                        </View>
                    </View>

                    {/* venue */}
                    <View style={styles.icon_container}>
                        <Image style={styles.icon} source={icons.map}/>
                        <View style={styles.spacer} />
                        <View style={styles.icon_container_text_container}>
                            <Text style={styles.meta_heading}>{navigation.state.params.item.venue}</Text>
                            <Text style={styles.meta_paragraph}>40 Dock Road, Cape Town</Text>
                        </View>
                    </View>

                    {/* tickets */}
                    <View style={styles.icon_container}>
                        <Image style={styles.icon} source={icons.ticket}/>
                        <View style={styles.spacer} />
                        <View style={styles.icon_container_text_container}>
                            <Text style={styles.meta_heading}>R500</Text>
                            <Text style={styles.meta_paragraph}>Tickets include: a full day of inspiring talks. A nutitious lunch and healthy snacks.</Text>
                            <Text style={styles.meta_link}>Buy Tickets</Text>
                        </View>
                    </View>
                </View>

                {/* article */}
                <View style={styles.article}>
                    {/* heading */}
                    <Text style={styles.headerText}>{navigation.state.params.item.title}</Text>

                    {/* text */}
                    <Text style={styles.paragraphText}>{navigation.state.params.item.text}</Text>

                    {/* map */}
                    <Map address={'Avenue Cape Town'}/>

                    {/* social */}
                    <Social/>

                    {/* designed by */}
                    <DesignedBy/>

                </View>


            </View>
            </ScrollView>
        )
    }
}

// icons
var icons = {
    calendar: require('../assets/icn/calendar.png'),
    map: require('../assets/icn/loacation.png'),
    ticket: require('../assets/icn/ticket.png')
}



// styles
const styles = StyleSheet.create({
    container: {
        fontFamily: 'HelveticaNeue',
        flexDirection: 'column',
        flex: 1,
        paddingBottom: 24.5 * PixelRatio.get()
    },
    meta_container: {
        padding: 16 * PixelRatio.get()
    },
    hero_image: {
        height: 125 * PixelRatio.get(),
        width: '100%',
        resizeMode: 'cover'
    },
    icon: {

    },
    icon_container: {
        width: '100%',
        flexDirection: 'row',
        paddingBottom: 10 * PixelRatio.get()
    },
    icon_container_text_container: {
        flexDirection: 'column'
    },
    spacer: {
        paddingHorizontal: 2.5 * PixelRatio.get()
    },
    meta_heading: {
        fontFamily: 'HelveticaNeueBold',
        fontSize: 8.5,
        lineHeight: 12,
        letterSpacing: -0.21
    },
    meta_paragraph: {
        fontFamily: 'HelveticaNeue',
        fontSize: 7.5,
        lineHeight: 12,
        letterSpacing: -0.19
    },
    meta_link: {
        fontFamily: 'HelveticaNeue',
        color: '#e62b1e',
        fontSize: 5.5,
        letterSpacing: -0.09
    },
    article: {
        paddingRight: 16 * PixelRatio.get(),
        paddingLeft: 16 * PixelRatio.get(),
    },
    headerText: {
        fontFamily: 'HelveticaNeueBold',
        // letterSpacing: -0.5,
        // lineHeight: 12,
        fontSize: 18
    },
    paragraphText: {
        paddingTop: 15 * PixelRatio.get(),
        fontFamily: 'HelveticaNeue',
        fontSize: 7.5,
        letterSpacing: -0.19,
        lineHeight: 12
    }
})