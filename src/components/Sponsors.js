/**
 * @class           Sponsors
 * @description     Sponsors accordion list component
 * @author          Michael Lungu
 */

import React, { Component } from 'react'
import {Text, View, Image, StyleSheet, PixelRatio, TouchableHighlight, Linking, FlatList} from 'react-native'
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

const regularSponsors = [
    require('../assets/image/payfast.png'),
    require('../assets/image/simpletax.png'),
    require('../assets/image/proveg.png'),
    require('../assets/image/storage.png'),
    require('../assets/image/sharp-music.png'),
    require('../assets/image/audio-visual-alchemy.png'),
    require('../assets/image/green-house.png'),
    require('../assets/image/legalese.png'),
]

export default class Sponsors extends Component {
    state = {
        activeSections: []
    };

    _renderSectionTitle = section => {
        return (
            <View style={styles.content}>
                <Text style={styles.contentText}>{section.content}</Text>
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
                <TouchableHighlight onPress={() => Linking.openURL('http://' + section.url)}>
                    <Text style={styles.url}>{section.url}</Text>
                </TouchableHighlight>
                <Text style={styles.body}>{section.content}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    renderNomralSponsor = ({item, index }) => {
        return (
            <View style={styles.regularSponsor}>
                <Image source={item} style={{ height: 25 * PixelRatio.get(), resizeMode: 'contain'}}/>
            </View>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Accordion
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}

                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />

                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fefefe'}}>
                    <View style={[styles.topSegment, { justifyContent:'center'}]}>
                        <Text style={styles.headerText}>Sponsors</Text>
                    </View>
                    <FlatList
                        data={regularSponsors}
                        contentContainerStyle={styles.regularSponsorList}
                        renderItem={this.renderNomralSponsor}
                        numColumns={2}
                    />
                </View>
            </View>
        );
    }
}

const icons = {
    open: require('../assets/icn/back-black.png'),
    close: require('../assets/icn/back-black-left.png')
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        flexDirection: 'column',
        height: 100 * PixelRatio.get(),
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
        justifyContent: 'center',

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
        paddingHorizontal: 15 * PixelRatio.get(),
    },
    url: {
        fontFamily: 'HelveticaNeueMedium',
        paddingTop: 7.5 * PixelRatio.get(),
        paddingBottom: 10 * PixelRatio.get(),
        color: '#e62b1e',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19)
    },
    body: {
        fontFamily: 'HelveticaNeueMedium',
        paddingBottom: 15 * PixelRatio.get(),
        color: '#000',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19)
    },
    regularSponsorList: {
        flex: 1,
    },
    regularSponsor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20 * PixelRatio.get()
    }
})