/**
 * @class           Schedule
 * @description     Schedule accordion list component
 * @author          Michael Lungu
 */

import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, PixelRatio} from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';

var SECTIONS = [
    {
        title: 'How to buy an island',
        speaker: 'Sam Beckbessinger',
        date: 'Sun, 11 November 2018',
        time: '09:30',
        content: 'Sam Beckbessinger is a writer, user-experience designer and entrepreneur who is on a quest to help the emerging middle class understand how to take charge of their finances. Author of ‘Manage Your Money Like a F*cking Grown Up’, she is also a co-founder of Lettuce, an app that wants to make managing your money as simple as making toast. She also lectures extensively on personal finances and designing for behaviour change, and writes for television.\n' +
        '\n' +
        'Being so passionate about helping people feel more in control of their money (and as a result more in control of their lives) she’s excited to be using the TEDxCapeTown stage and platform to reach a wider audience while at the same time refining the her message and story.\n' +
        '\n' +
        'Sam shared the following with us in a quest to give you a little peak of her personality:   \n' +
        '\n' +
        'If you could be any animal in the world, what animal would you be?\n' +
        '\n' +
        'A cow, because they get to eat all their meals twice.\n' +
        '\n' +
        'If you could time travel, where would you go?\n' +
        '\n' +
        'Back in time to meet my 15-year old self so that I can laugh at her hairdo.\n' +
        '\n' +
        'What\'s your favourite TED/ TEDx talk?\n' +
        '\n' +
        'Mary Roach\'s ‘10 things you didn\'t know about the orgasm’.',
        social: '@beckbessinger',
        image: require('../assets/image/speaker-Sam.png')
    },
];

class Line extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#e62b1e',
                width: 1 * PixelRatio.get(),
                height: this.props.height * PixelRatio.get()
            }}/>
        )
    }
}

export default class Schedule extends Component {
    state = {
        activeSections: []
    };

    _renderSectionTitle = section => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    _renderHeader = (section, index, isActive, sections) => {
        return (
            <View style={isActive ? styles.headerActive : styles.header}>

                {/* left */}
                <View style={styles.leftSegment}>

                    {/* red line*/}
                    <Line height={12}/>

                    {/* time */}
                    <View style={styles.time}>
                        <Text style={styles.time_text}>{section.time}</Text>
                    </View>

                    {/* red line */}
                    <Line height={(styles.header.height / PixelRatio.get()) - 19}/>
                </View>

                {/* right*/}
                <View style={styles.rightSegment}>
                    {/* top */}
                    <View style={styles.topSegment}>
                        <Text style={ isActive ? styles.headerTextActive : styles.headerText}>{section.title}</Text>
                        <Image source={isActive ? icons.close : icons.open}/>
                    </View>

                    {/* bottom */}
                    <View style={styles.bottomSegment}>
                        <Text style={ isActive ? styles.subHeaderTextActive : styles.subHeaderText}>{section.speaker}</Text>
                    </View>
                </View>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={styles.body}>{section.content}</Text>
                <Image style={styles.bodyImage} source={section.image}/>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({activeSections});
    };

    render() {
        return (
            <Accordion
                sections={SECTIONS}
                activeSections={this.state.activeSections}

                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
            />
        );
    }
}

const icons = {
    open: require('../assets/icn/back-on-dark.png'),
    close: require('../assets/icn/back-black-left.png')
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 48 * PixelRatio.get(),
        backgroundColor: '#171717',
        // alignItems: 'center',
        paddingHorizontal: 10 * PixelRatio.get(),
        // elevation: 7,
    },
    headerActive: {
        flexDirection: 'row',
        height: 48 * PixelRatio.get(),
        backgroundColor: '#fefefe',
        // alignItems: 'center',
        paddingHorizontal: 10 * PixelRatio.get(),
        // elevation: 7,
    },
    rightSegment: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5 * PixelRatio.get(),
    },
    leftSegment: {

        flexDirection: 'column',
        alignItems: 'center',
    },
    time: {
        flex: 1,
        flexDirection: 'column',
        height: 7 * PixelRatio.get(),
        width: 20 * PixelRatio.get(),
        backgroundColor: '#e62b1e',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7
    },
    time_text: {
        color: '#fff',
        fontFamily: 'HelveticaNeueBold',
        // fontSize: 6,
        letterSpacing: 0,
    },
    topSegment: {
        paddingTop: 10 * PixelRatio.get(),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottomSegment: {
        paddingTop: 4 * PixelRatio.get(),
        flexDirection: 'row',
    },
    headerText: {
        fontFamily: 'HelveticaNeueBold',
        letterSpacing: 0,
        color: '#fff',
        fontSize: 11 * 2,
    },
    subHeaderText: {
        fontFamily: 'HelveticaNeue',
        letterSpacing: -0.19,
        // lineHeight: 12,
        color: '#fff',
        fontSize: 7.5 * 2,
    },
    headerTextActive: {
        fontFamily: 'HelveticaNeueBold',
        letterSpacing: 0,
        color: '#e62b1e',
        fontSize: 11 * 2,
    },
    subHeaderTextActive: {
        fontFamily: 'HelveticaNeue',
        letterSpacing: -0.19,
        // lineHeight: 12,
        color: '#000',
        fontSize: 7.5 * 2,
    },
    spacer: {
        padding: 5 * PixelRatio.get()
    },
    content: {
        backgroundColor: '#fefefe',
        flex: 1,
        flexDirection: 'column',
        fontFamily: 'HelveticaNeue',
    },
    body: {
        paddingLeft: 35 * PixelRatio.get(),
        paddingRight: 15 * PixelRatio.get(),
        color: '#000',
        // fontSize: 7.5 * 3,
        // lineHeight: 12,
        // letterSpacing: -0.19
    },
    bodyImage: {
        // height: 170 * PixelRatio.get(),
        paddingTop: 9 * PixelRatio.get(),
        alignSelf: 'flex-end'
    }
})