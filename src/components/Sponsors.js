/**
 * @class           Sponsors
 * @description     Sponsors accordion list component
 * @author          Michael Lungu
 */

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, PixelRatio } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
    {
        title: 'Headline Sponsor',
        content: 'Lorem ipsum...',
        url: 'www.globee.com',
        image: require('../assets/image/globee.png')
    },
    {
        title: 'Primary Sponsor: Venue',
        content: 'We create and manage spaces in which startups, experienced companies, freelancers, profit and non-profit, big and small, can come together to talk, collaborate, experiment and innovate. Workshop17 is a platform for the greater ecosystem that works to shape a powerful, prosperous Africa. \n' +
        '\n' +
        'Workshop17 offers public cafés, shared workspaces, dedicated offices, meeting rooms, seminar rooms and event spaces. Our flexible membership plans range from drop in day use, via month to month, to long term arrangement. Workshop17 fosters a community and our members tend to stay and grow within Workshop17 making it their home base for work.',
        url: 'www.workshop17.com',
        image: require('../assets/image/workshop-17.png')
    }
];

export default class Sponsors extends Component {
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
            <View style={styles.header}>
                <View style={styles.topSegment}>
                    <View style={styles.spacer} />
                    <Text style={styles.headerText}>{section.title}</Text>
                    <Image source={ isActive ? icons.close : icons.open} />
                </View>
                <View style={styles.bottomSegment}>
                    <Image source={section.image} />
                </View>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={styles.url}>{section.url}</Text>
                <Text style={styles.body}>{section.content} comes here</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
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
    close: require('../assets/icn/back-black.png'),
    open: require('../assets/icn/back-black-left.png')
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        height: 85 * PixelRatio.get(),
        width: '100%',
        backgroundColor: '#fefefe',
        alignItems: 'center',
        paddingHorizontal: 15 * PixelRatio.get(),
        elevation: 7,
    },
    topSegment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 25 * PixelRatio.get(),
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1 * PixelRatio.get(),
        borderBottomColor: '#f7f9fa'
    },
    bottomSegment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontFamily: 'HelveticaNeueBold',
        letterSpacing: 0,
        color: '#000',
        fontSize: 5.5 * 3,
    },
    spacer: {
        padding: 5 * PixelRatio.get()
    },
    content: {
        backgroundColor: '#fefefe',
        flex: 1,
        flexDirection: 'column',
        fontFamily: 'HelveticaNeue',
        paddingHorizontal: 15 * PixelRatio.get(),
    },
    url: {
        paddingTop: 7.5 * PixelRatio.get(),
        paddingBottom: 10 * PixelRatio.get(),
        color: '#e62b1e',
        // fontSize: 7.5 * 3,
        // lineHeight: 12,
        // letterSpacing: -0.19
    },
    body: {
        paddingBottom: 15 * PixelRatio.get(),
        color: '#000',
        // fontSize: 7.5 * 3,
        // lineHeight: 12,
        // letterSpacing: -0.19
    }
})