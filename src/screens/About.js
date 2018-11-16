/**
 * @class           About
 * @description     About screen
 * @author          Michael Lungu
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    PixelRatio,
    ScrollView,
    Linking,
    Platform,
    TouchableWithoutFeedback,

} from 'react-native'
import Map from '../components/Map'
import Social from '../components/Social'
import DesignedBy from '../components/DesignedBy'

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heroImage: require('../assets/image/eventmain.png')

        }
    }

    openCalendar() {
        if (Platform.OS === 'ios') {
            Linking.openURL('calshow:');
        } else if (Platform.OS === 'android') {
            Linking.openURL('content://com.android.calendar/time/');
        }
    }

    render() {
        const {navigation} = this.props
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.hero_image} source={this.state.heroImage}/>
                    <View style={styles.meta_container}>

                        {/* date */}
                        <View style={styles.icon_container}>
                            <Image style={{ width: 12 * PixelRatio.get(), height: 12 * PixelRatio.get(), resizeMode: 'stretch' }} source={icons.calendar}/>
                            <View style={styles.spacer}/>
                            <View style={styles.icon_container_text_container}>
                                <Text style={styles.meta_heading}>{navigation.state.params.item.date} </Text>
                                <Text style={styles.meta_paragraph}>{navigation.state.params.item.time}</Text>
                            </View>
                        </View>

                        {/* venue */}
                        <View style={styles.icon_container}>
                            <Image style={{ width: 7.5 * PixelRatio.get(), height: 10.3 * PixelRatio.get(), resizeMode: 'stretch' }}source={icons.map} />
                            <View style={styles.spacer}/>
                            <View style={styles.icon_container_text_container}>
                                <Text style={styles.meta_heading}>{navigation.state.params.item.venue}</Text>
                                <Text style={styles.meta_paragraph}>{navigation.state.params.item.venueAddress}</Text>
                            </View>
                        </View>

                        {/* tickets */}
                        <View style={styles.icon_container}>
                            <Image style={{ width: 7.5 * PixelRatio.get(), height: 10.5 * PixelRatio.get(), resizeMode: 'stretch' }} source={icons.ticket}/>
                            <View style={styles.spacer}/>
                            <View style={styles.icon_container_text_container}>
                                <Text style={styles.meta_heading}>R{navigation.state.params.item.ticketPrice}</Text>
                                <Text style={styles.meta_paragraph}>{navigation.state.params.item.ticketDescription}</Text>
                            </View>
                        </View>
                    </View>

                    {/* article */}
                    <View style={styles.article}>
                        {/* heading */}
                        <Text style={styles.headerText}>{navigation.state.params.item.title}</Text>

                        {/* text */}
                        <Text style={styles.paragraphText}>{tempText}</Text>

                        {/* map */}
                        <Map address={navigation.state.params.item.venue} coordinates={navigation.state.params.item.location}/>

                        {/* social */}
                        <Social color={'black'}/>

                        {/* designed by */}
                        <DesignedBy color={'black'}/>

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

var tempText = 'Charles Darwin and John Dewey give us food for thought with these respective quotes - "It’s not the strongest of the species that survives, nor the most intelligent, but the most responsive to change; We don’t learn through experience, but rather through reflecting on experiences." \n' +
    '\n' +
    'Taking this as inspiration, the theme for the 2018 TEDxCapeTown main event is... Pause & Effect. \n' +
    '\n' +
    'It’s been evident through socio-economic movements globally – consider #MeToo, #BlackLivesMatter, #FeesMustFall, #DataMustFall, Occupy, The Arab Spring and The Umbrella Revolution – that every action (positive or negative, big or small) causes shifts in energy and power, and this directly impacts the rate of change in our society.\n' +
    '\n' +
    'But there’s also power in pausing and considering before taking action, and in taking time to realise we have choices regarding why and how we develop. The result of pausing is often a more mindful approach to what happens after.\n' +
    '\n' +
    'We invite design thinkers, artists, activists, people managers, youth development workers, techpreneurs, mompreneurs, financial planners & more – young & more experienced, from all walks of life— to join us as we PAUSE to take EFFECT!'


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
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.21),
        marginBottom: 2.5 * PixelRatio.get()
    },
    meta_paragraph: {
        fontFamily: 'HelveticaNeue',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19),
        marginBottom: 2.5 * PixelRatio.get()
    },
    meta_link: {
        fontFamily: 'HelveticaNeue',
        color: '#e62b1e',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.09)
    },
    article: {
        paddingRight: 15 * PixelRatio.get(),
        paddingLeft: 15 * PixelRatio.get(),
    },
    headerText: {
        fontFamily: 'HelveticaNeueBold',
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.5),
        // lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        fontSize: PixelRatio.getPixelSizeForLayoutSize(18)
    },
    paragraphText: {
        paddingTop: 5 * PixelRatio.get(),
        fontFamily: 'HelveticaNeue',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12)
    }
})