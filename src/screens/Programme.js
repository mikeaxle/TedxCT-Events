/**
 * @class           Programme
 * @description     Programme screen
 * @author          Michael Lungu
 */

import React, {Component} from 'react'
import {View, StyleSheet, ScrollView, PixelRatio} from 'react-native'
import Schedule from '../components/Schedule'
import Social from '../components/Social'
import DesignedBy from '../components/DesignedBy'
import firebase from 'react-native-firebase'

export default class Programme extends Component {

    constructor(props){
        super(props)

        // unsubscribe object
        // this.unsubscribe = null

        this.state = {
            speakers: [],
            loading: true,
        };

        // // get firestore collection
        // firebase.firestore().collection('Speakers')
        //     .orderBy("order")
        //     .get()
        //     .then((querySnapsot) => {
        //         let speakers = []
        //         querySnapsot.forEach((doc) => {
        //             // assign speaker event + id
        //             speakers.push(doc.data())
        //
        //         })
        //
        //
        //         this.setState({
        //             speakers,
        //             loading: false
        //         })
        //
        //         console.log(this.state.speakers)
        //
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })

    }



    render() {
        return (

            <View style={styles.container}>
                <ScrollView>
                    <Schedule list={this.state.speakers} date={this.props.navigation.getParam('item', '17 November 2018').date}/>
                    <View style={{paddingHorizontal: 15 * PixelRatio.get()}}>
                        <Social color={'white'}/>
                        <DesignedBy color={'white'}/>
                    </View>
                </ScrollView>
            </View>

        )
    }
}

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        paddingBottom: 18.5 * PixelRatio.get()
    }
})