/**
 * @class           Dashboard
 * @description     Dashboard screen
 * @author          Michael Lungu
 */


import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, PixelRatio, ScrollView, FlatList, Alert, Button, TouchableHighlight} from 'react-native'
import firebase from 'react-native-firebase';
import MainEvent from '../components/MainEvent'
import SalonEvent from '../components/SalonEvent'
import Social from '../components/Social'
import DesignedBy from '../components/DesignedBy'

export default class Dashboard extends Component {

    // constructor
    constructor(props) {
        super(props)

        // get firestore collection
        this.ref = firebase.firestore().collection('Events')

        // unsubscribe object
        this.unsubscribe = null

        // init state
        this.state = {
            events: [],
            loading: true,
            mainEvent: null
        }

    }

    // when component mounts
    componentDidMount(){
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    // when component unmounts
    componentWillUnmount() {
        this.unsubscribe();
    }


    /**
     * @method                  onCollectionUpdate
     * @description             updates UI while listening for changes on firebase
     * @param querySnapshot
     */
    onCollectionUpdate = (querySnapshot) => {

        // local temp variables
        let events = []
        let event = null
        let mainEvent = null

        // iterate through results
        querySnapshot.forEach((doc) => {
            // check if main event
            if(doc.id === 'bt2MNT60J278AACAfgSm') {
                // assign main event + id
                mainEvent = doc.data()
                mainEvent.id = doc.id
            } else {
                // assign salon event + 9
                event = doc.data()
                event.id = doc.id

                // add to events array
                events.push(event)
            }

        })

        // set state
        this.setState({
            events,
            mainEvent,
            loading: false,
        })
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
            onPressItem={() => this.props.navigation.navigate('Event', {item: item})}
            id={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
            venue={item.venue}
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

    showMainEvent(){
        if(this.state && this.state.mainEvent) {
            return <MainEvent item={this.state.mainEvent} onPressItem={() => this.props.navigation.navigate('Event', {item: this.state.mainEvent})}/>
        } else {
            return null
        }

    }

    /**
     * Returns JSX
     * @returns {*}
     */
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <Image source={header} style={styles.header_img}/>
                    </View>

                    { this.showMainEvent() }

                    {/*<FlatList*/}
                    {/*contentContainerStyle={styles.list_container}*/}
                    {/*data={dummyData}*/}
                    {/*renderItem={({item}) => this._renderItem({item})}*/}
                    {/*keyExtractor={(item, index) => this._keyExtractor(item, index)}/>*/}
                    <Social color={'black'}/>
                    <View style={{paddingHorizontal: 15 * PixelRatio.get(), marginBottom: 24.5 * PixelRatio.get()}}>
                        <DesignedBy color={'black'}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}



// header image
var header = require('../assets/logo/tedx-cptown.png')

//styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f9fa',
        flexDirection: 'column',
        justifyContent: 'flex-start',

    },
    header: {
        margin: 15 * PixelRatio.get()
    },
    header_img: {
        height: (32 * PixelRatio.get()) * 1.2,
        width: (91 * PixelRatio.get()) * 1.2,
        resizeMode: 'contain'
    },
    list_container: {
        paddingLeft: 15 * PixelRatio.get(),
        paddingRight: 15 * PixelRatio.get(),
    },

})
