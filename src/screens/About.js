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
                            <Image style={styles.icon} source={icons.calendar}/>
                            <View style={styles.spacer}/>
                            <View style={styles.icon_container_text_container}>
                                <Text style={styles.meta_heading}>{navigation.state.params.item.date} </Text>
                                <Text style={styles.meta_paragraph}>{navigation.state.params.item.time}</Text>
                                <TouchableWithoutFeedback onPress={() => this.openCalendar()}>
                                    <Text style={styles.meta_link}>Add to Calendar</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                        {/* venue */}
                        <View style={styles.icon_container}>
                            <Image style={styles.icon} source={icons.map}/>
                            <View style={styles.spacer}/>
                            <View style={styles.icon_container_text_container}>
                                <Text style={styles.meta_heading}>{navigation.state.params.item.venue}</Text>
                                <Text style={styles.meta_paragraph}>{navigation.state.params.item.venueAddress}</Text>
                            </View>
                        </View>

                        {/* tickets */}
                        <View style={styles.icon_container}>
                            <Image style={styles.icon} source={icons.ticket}/>
                            <View style={styles.spacer}/>
                            <View style={styles.icon_container_text_container}>
                                <Text style={styles.meta_heading}>R{navigation.state.params.item.ticketPrice}</Text>
                                <Text style={styles.meta_paragraph}>{navigation.state.params.item.ticketDescription}</Text>
                                <TouchableWithoutFeedback
                                    onPress={() => Linking.openURL(navigation.state.params.item.buyTicketsLink)}>
                                    <Text style={styles.meta_link}>Buy Tickets</Text>
                                </TouchableWithoutFeedback>
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


// styles
const styles = StyleSheet.create({
    container: {
        fontFamily: 'HelveticaNeueMedium',
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
    icon: {},
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
        fontFamily: 'HelveticaNeueMedium',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19),
        marginBottom: 2.5 * PixelRatio.get()
    },
    meta_link: {
        fontFamily: 'HelveticaNeueMedium',
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
        paddingTop: 15 * PixelRatio.get(),
        fontFamily: 'HelveticaNeueMedium',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12)
    }
})