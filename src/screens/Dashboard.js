/**
 * @class           Dashboard
 * @description     Dashboard screen
 * @author          Michael Lungu
 */


import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, PixelRatio, ScrollView, FlatList, Alert, Button} from 'react-native'
import MainEvent from '../components/MainEvent'
import SalonEvent from '../components/SalonEvent'
import Social from '../components/Social'
import DesignedBy from '../components/DesignedBy'

export default class Dashboard extends Component {

    constructor(props){
        super(props)
    }

    /**
     * @method  _renderItem
     * @description  renders salon list item
     * @param item
     * @returns {*}
     * @private
     */
    _renderItem = ({item}) => (
        <SalonEvent
            onPressItem = {() => this.props.navigation.navigate('Event', { item: item })}
            id = {item.id}
            image = {item.image}
            title = {item.title}
            date = {item.date}
            venue = {item.venue}
        />)

    /**
     * @method  _keyExtractor
     * @description Extracts index
     * @param item
     * @param index
     * @returns {string}
     * @private
     */
    _keyExtractor = (item, index) => (
        index.toString()
    )

    /**
     * Returns JSX
     * @returns {*}
     */
    render(){
        return (
            <ScrollView>
            <View style={styles.container}>

                    <View style={styles.header}>
                        <Image source={header} style={styles.header_img}/>
                    </View>
                    <MainEvent id={mainEventID} />
                    <FlatList
                        contentContainerStyle={ styles.list_container }
                        data={ dummyData }
                        renderItem={ ({item}) => this._renderItem({item}) }
                        keyExtractor={ (item, index) => this._keyExtractor(item, index) } />
                    <Social />
                    <DesignedBy />
            </View>
            </ScrollView>


        )
    }
}

// main event ID
var mainEventID = 0

// dummy data
var dummyData = [
    {
        id: '1',
        image: require('../assets/image/event-salon.png'),
        title: 'OCEANS 2018',
        date: '06 DECEMBER 2018',
        venue: 'V&A WATERFRONT',
        text: 'Charles Darwin and John Dewey give us food for thought with these respective quotes - "It’s not the strongest of the species that survives, nor the most intelligent, but the most responsive to change; We don’t learn through experience, but rather through reflecting on experiences." \n' +
        '\n' +
        'Taking this as inspiration, the theme for the 2018 TEDxCapeTown main event is...\n' +
        'Pause & Effect. View Event on Facebook.\n' +
        '\n' +
        'It’s been evident through socio-economic movements globally — consider#MeToo, #BlackLivesMatter, #FeesMustFall, #DataMustFall, Occupy, The Arab Spring and The Umbrella Revolution — that every action (positive or negative, big or small) causes shifts in energy and power. And this directly impacts the rate of change in our society.\n' +
        '\n' +
        'But there’s also power in pausing and considering before taking action, and in taking time to realise we have choices regarding why and how we develop. The result of pausing is often a more mindful approach to what happens after.\n' +
        '\n' +
        'We invite design thinkers, artists, activists, people managers, youth development workers, techpreneurs, mompreneurs, financial planners & more —young & more experienced, from all walks of life— to join us as we PAUSE to take EFFECT!'
    },
    {
        id: '2',
        image: require('../assets/image/event-salon.png'),
        title: 'OCEANS 2018',
        date: '06 DECEMBER 2018',
        venue: 'V&A WATERFRONT',
        text: 'Charles Darwin and John Dewey give us food for thought with these respective quotes - "It’s not the strongest of the species that survives, nor the most intelligent, but the most responsive to change; We don’t learn through experience, but rather through reflecting on experiences." \n' +
        '\n' +
        'Taking this as inspiration, the theme for the 2018 TEDxCapeTown main event is...\n' +
        'Pause & Effect. View Event on Facebook.\n' +
        '\n' +
        'It’s been evident through socio-economic movements globally — consider#MeToo, #BlackLivesMatter, #FeesMustFall, #DataMustFall, Occupy, The Arab Spring and The Umbrella Revolution — that every action (positive or negative, big or small) causes shifts in energy and power. And this directly impacts the rate of change in our society.\n' +
        '\n' +
        'But there’s also power in pausing and considering before taking action, and in taking time to realise we have choices regarding why and how we develop. The result of pausing is often a more mindful approach to what happens after.\n' +
        '\n' +
        'We invite design thinkers, artists, activists, people managers, youth development workers, techpreneurs, mompreneurs, financial planners & more —young & more experienced, from all walks of life— to join us as we PAUSE to take EFFECT!'
    },
    {
        id: '3',
        image: require('../assets/image/event-salon.png'),
        title: 'OCEANS 2018',
        date: '06 DECEMBER 2018',
        venue: 'V&A WATERFRONT',
        text: `Charles Darwin and John Dewey give us food for thought with these respective quotes - "It’s not the strongest of the species that survives, nor the most intelligent, but the most responsive to change; We don’t learn through experience, but rather through reflecting on experiences." 

Taking this as inspiration, the theme for the 2018 TEDxCapeTown main event is...
Pause & Effect. View Event on Facebook.

It’s been evident through socio-economic movements globally — consider#MeToo, #BlackLivesMatter, #FeesMustFall, #DataMustFall, Occupy, The Arab Spring and The Umbrella Revolution — that every action (positive or negative, big or small) causes shifts in energy and power. And this directly impacts the rate of change in our society.

But there’s also power in pausing and considering before taking action, and in taking time to realise we have choices regarding why and how we develop. The result of pausing is often a more mindful approach to what happens after.

We invite design thinkers, artists, activists, people managers, youth development workers, techpreneurs, mompreneurs, financial planners & more —young & more experienced, from all walks of life— to join us as we PAUSE to take EFFECT!`
    },
]

// header image
var header = require('../assets/logo/tedx-cptown.png')

//styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#f7f9fa',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingBottom: 24.5 * PixelRatio.get()
    },
    header: {
        margin: 15 * PixelRatio.get()
    },
    header_img: {
        height: 32 * PixelRatio.get(),
        width: 91 * PixelRatio.get(),
        resizeMode: 'contain'
    },
    list_container: {
        paddingLeft: 15 * PixelRatio.get(),
        paddingRight: 15 * PixelRatio.get(),
    }
})
