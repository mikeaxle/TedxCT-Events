/**
 * @class           Sponsors
 * @description     Sponsors accordion list component
 * @author          Michael Lungu
 */

import React, { Component } from 'react'
import {Text, View, Image, StyleSheet, PixelRatio, Linking, FlatList, TouchableWithoutFeedback} from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
    {
        title: 'Headline Sponsor',
        content: 'GloBee is a global cryptocurrency payment provider which enables merchants to accept cryptocurrencies and offers international remittance services without risk.\n' +
        '\n' +
        'GloBee guarantees zero fluctuations in crypto value. We remove this risk by accepting the payments on the merchants behalf and guaranteeing the original value of the sale.\n' +
        '\n' +
        'GloBee is the first processor in the world to accept Bitcoin Lightning.\n' +
        '\n' +
        'GloBee offers open source plugins for all major ecommerce platforms (Shopify / WooCommerce / Magento etc). This allows merchants to seamlessly integrate GloBee into their current system.',
        url: 'www.globee.com',
        image: require('../assets/image/globee.png'),
    },
    {
        title: 'Primary Sponsor: Venue',
        content: 'The V&A Waterfront is a mixed-use development comprising residential and commercial property, hotels, retail stores, dining, leisure and entertainment facilities. Spanning 123 hectares, it’s a space where you can work, live, eat and play.',
        url: 'www.waterfront.co.za',
        image: require('../assets/image/v_a.png'),

    },
    {
        title: 'Primary Sponsor: Venue',
        content: 'We create and manage spaces in which startups, experienced companies, freelancers, profit and non-profit, big and small, can come together to talk, collaborate, experiment and innovate. Workshop17 is a platform for the greater ecosystem that works to shape a powerful, prosperous Africa. \n' +
        '\n' +
        'Workshop17 offers public cafés, shared workspaces, dedicated offices, meeting rooms, seminar rooms and event spaces. Our flexible membership plans range from drop in day use, via month to month, to long term arrangement. Workshop17 fosters a community and our members tend to stay and grow within Workshop17 making it their home base for work.',
        url: 'www.workshop17.com',
        image: require('../assets/image/workshop-17.png'),

    },
    {
        title: 'Secondary Sponsor: Brand Strategy',
        content: 'The team behind TEDxCapeTown have been looking to take the brand to the next level, so we felt both pleased and honoured when the opportunity to participate in Vega’s annual Brand Challenge came along.  Brand Challenge is a real life project that engages multidisciplinary student teams comprising of Strategic Brand Planners and Managers, Digital Marketers, Visual Communicators, Multi-media Designers and Copywriters in the development and execution of original and meaningful solutions to real-life brand challenges.  Vega, an educational brand of The Independent Institute of Education, was formed in 1999 in anticipation of the shift in the global paradigm away from conventional marketing and advertising toward a synchronous cohesion of design, branding and business. With the reconfiguration of traditional platforms and the emergence of new ones, it is the art, craft, and science of branding that has become the universal language of the marketplace. Think of brands such as Google, Greenpeace and Apple - brands are far more than letters and logos but powerful cultural forces shaping the world as we know it.  As a result of this seismic shift in the industry landscape arose an urgent need to educate South Africa\'s most talented young minds in preparation for this brave new world. A new school of thought was called for and Vega answered that call. With branding being the DNA of Vega, the school is ideally positioned to meet the rapidly growing needs of industry by supplying students with the conceptual, strategic and practical skill-sets required to rise to the challenge of the future.   Brands find immense creative and strategic value in participating in the challenge, which offers limited space, and the fact that TEDxCapeTown was selected to participate as a pro bono client, was an honour.',
        url: 'vegaschool.com',
        image: require('../assets/image/vega.png'),

    },
    {
        title: 'Secondary Sponsor: Digital Services',
        content: 'We create captivating digital experiences.  We design digital products and take them to market.  We understand what matters to people. We understand what matters to business. By creating digital platforms that people want to use, we bring the two together and make it count.',
        url: 'nowboarding.co.za',
        image: require('../assets/image/nowboarding.png'),

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
                    <Image source={section.image} style={{ width: 150 * PixelRatio.get(),  height: 50 * PixelRatio.get() }} />
                </View>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('http://' + section.url)}>
                    <Text style={styles.url}>{section.url}</Text>
                </TouchableWithoutFeedback>
                <Text style={styles.body}>{section.content}</Text>
            </View>
        );
    };

    _keyExtractor = (item, index) => (
        index.toString()
    )

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    renderNomralSponsor = ({item, index }) => {
        return (
            <View style={styles.regularSponsor}>
                <Image source={item} style={{ height: 25 * PixelRatio.get(), width: 75.5 * PixelRatio.get(),resizeMode: 'contain'}}/>
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
                        keyExtractor={(item, index) => this._keyExtractor(item, index)}
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
        flexDirection: 'column',
        backgroundColor: '#fefefe',
    },
    header: {
        flexDirection: 'column',
        height: 85 * PixelRatio.get(),
        width: '100%',
        backgroundColor: '#fefefe',
        alignItems: 'center',
        paddingHorizontal: 15 * PixelRatio.get(),
        elevation: 30,
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText: {
        fontFamily: 'HelveticaNeueBold',
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.09),
        color: '#000',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
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
        fontFamily: 'HelveticaNeue',
        paddingTop: 7.5 * PixelRatio.get(),
        paddingBottom: 10 * PixelRatio.get(),
        color: '#e62b1e',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.19)
    },
    body: {
        fontFamily: 'HelveticaNeue',
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