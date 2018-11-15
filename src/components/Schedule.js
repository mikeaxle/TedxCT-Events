/**
 * @class           Schedule
 * @description     Schedule accordion list component
 * @author          Michael Lungu
 */

import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    PixelRatio,
    ImageBackground,
    Linking,
    TouchableWithoutFeedback
} from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';

var SECTIONS = [
    {
        title: 'How to buy an Island',
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
        social: {
            twitter: 'beckbessinger'
        },
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

class SocialSpeaker extends Component {
    constructor(props) {
        super(props)
    }

    fbIcon() {
        if (this.props.facebook === undefined) {
            return null
        }

        return (
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://facebook.com/' + this.props.facebook)}>
                <Image style={styles.iconSocial} source={icons.facebook}/>
            </TouchableWithoutFeedback>
        )
    }

    twitterIcon() {
        if (this.props.twitter === undefined) {
            return null
        }

        return (
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://twitter.com/' + this.props.twitter)}>
                <Image style={styles.iconSocial} source={icons.twitter}/>
            </TouchableWithoutFeedback>
        )
    }

    igIcon() {
        if (this.props.instagram === undefined) {
            return null
        }

        return (
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://instagram.com/' + this.props.instagram)}>
                <Image style={styles.iconSocial} source={icons.instagram}/>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            <View style={styles.bodySocial}>
                {this.fbIcon()}
                {this.twitterIcon()}
                {this.igIcon()}
            </View>
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
                        <Text style={isActive ? styles.headerTextActive : styles.headerText}>{section.title}</Text>
                        <Image style={styles.icon} source={isActive ? icons.close : icons.open}/>
                    </View>

                    {/* bottom */}
                    <View style={styles.bottomSegment}>
                        <Text
                            style={isActive ? styles.subHeaderTextActive : styles.subHeaderText}>{section.speaker}</Text>
                    </View>
                </View>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={styles.body}>{section.content}</Text>
                <ImageBackground style={styles.bodyImage} source={section.image}>
                    <SocialSpeaker twitter={section.social.twitter}/>
                </ImageBackground>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({activeSections});
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.programHeader}>
                    <View style={[styles.leftSegment, {paddingLeft: 11 * PixelRatio.get()}]}>
                        <Image source={icons.programme} style={styles.programIcon} imageStyle={{resizeMode: 'center'}}/>
                        <Line height={60 - 18}/>
                    </View>
                    <View style={styles.rightSegment}>
                        <Text style={styles.programHeaderText}>Programme</Text>
                        <Text style={styles.programHeaderDate}>{this.props.date}</Text>
                    </View>
                </View>

                <Accordion
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}

                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />

                <View style={styles.programFooter}>
                    <View style={[styles.leftSegment]}>
                        <Line height={15}/>
                        <View style={styles.programFooterSquareContainer}>
                            <View style={styles.programFooterSquare}></View>
                        </View>

                    </View>
                    <View style={styles.rightSegment}>
                        <Text style={styles.programFooterText}>Thanks for watching!</Text>
                    </View>
                </View>
            </View>

        );
    }
}

const icons = {
    open: require('../assets/icn/back-on-dark.png'),
    close: require('../assets/icn/back-black-left.png'),
    programme: require('../assets/image/pause_effect-icon.png'),
    facebook: require('../assets/icn/social-fb.png'),
    twitter: require('../assets/icn/social-tweet.png'),
    instagram: require('../assets/icn/social-instagram.png')
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    programHeader: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'flex-end',
        height: 60 * PixelRatio.get(),
        paddingTop: 21 * PixelRatio.get(),
        backgroundColor: '#171717',
    },
    programIcon: {
        height: 18 * PixelRatio.get(),
        width: 18 * PixelRatio.get(),
        resizeMode: 'contain'
    },
    programHeaderText: {
        fontFamily: 'HelveticaNeueBold',
        color: 'white',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
        // lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.39),
    },
    programHeaderDate: {
        fontFamily: 'HelveticaNeueBold',
        color: '#e62b1e',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.21),

    },
    header: {
        flexDirection: 'row',
        height: 48 * PixelRatio.get(),
        backgroundColor: '#171717',
        paddingHorizontal: 10 * PixelRatio.get(),
    },
    headerActive: {
        flexDirection: 'row',
        height: 48 * PixelRatio.get(),
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 10 * PixelRatio.get(),
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
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        letterSpacing: 0,
    },
    topSegment: {
        paddingTop: 10 * PixelRatio.get(),
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between'
    },
    bottomSegment: {
        paddingTop: 4 * PixelRatio.get(),
        flexDirection: 'row',
    },
    headerText: {
        fontFamily: 'HelveticaNeueBold',
        flexWrap: 'wrap',
        color: '#fff',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(11),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.31),
    },
    subHeaderText: {
        fontFamily: 'HelveticaNeueMedium',
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        color: '#fff',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
    },
    headerTextActive: {
        fontFamily: 'HelveticaNeueBold',
        flexWrap: 'wrap',
        color: '#e62b1e',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(11),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.31),
    },
    subHeaderTextActive: {
        fontFamily: 'HelveticaNeueMedium',
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        color: '#000',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
    },
    icon: {
        marginLeft: 'auto',
        left: 5 * PixelRatio.get(),
    },
    spacer: {
        padding: 5 * PixelRatio.get()
    },
    content: {
        backgroundColor: '#f8f8f8',
        flex: 1,
        flexDirection: 'column',

    },
    body: {
        fontFamily: 'HelveticaNeueMedium',
        paddingLeft: 35 * PixelRatio.get(),
        paddingRight: 15 * PixelRatio.get(),
        color: '#000',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19)
    },
    bodySocial: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 9.5 * PixelRatio.get(),
        marginRight: 15 * PixelRatio.get(),
    },
    bodyImage: {
        width: '100%',
        height: 150 * PixelRatio.get(),
        paddingTop: 9 * PixelRatio.get(),
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'

    },
    iconSocial: {
        height: 17.5 * PixelRatio.get(),
        width: 17.5 * PixelRatio.get(),
        resizeMode: 'contain',
        marginLeft: 12.5 * PixelRatio.get()

    },
    programFooter: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10 * PixelRatio.get(),
        backgroundColor: 'black',
    },
    programFooterSquareContainer: {
        width: 20  * PixelRatio.get(),
        alignItems: 'center',
    },
    programFooterSquare: {
        height: 7 * PixelRatio.get(),
        width: 7 * PixelRatio.get(),
        backgroundColor: '#e62b1e'
    },
    programFooterText: {
        marginTop: 15 * PixelRatio.get(),
        fontFamily: 'HelveticaNeueMedium',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(8),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.21),
        color: 'white'

    }
})