import React, { Component} from 'react'
import { Text, View, PixelRatio, StyleSheet } from 'react-native'

export default class Map extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Map</Text>
                <Text style={styles.title}>{this.props.address}</Text>
                <View style={styles.map}></View>
            </View>
        )
    }
}


// styles
const styles = StyleSheet.create({
    container: {
        marginTop: 15 * PixelRatio.get(),
        flex: 1,
        flexDirection: 'column',
    },
    heading: {
        fontSize: 11,
        lineHeight: 12,
        letterSpacing: -0.31
    },
    title: {
        paddingTop: 7 * PixelRatio.get(),
        paddingBottom: 10 * PixelRatio.get(),
        fontSize: 6.5,
        lineHeight: 8,
        letterSpacing: -0.16

    },
    map: {
        width: '100%',
        height: 157.5 * PixelRatio.get(),
        backgroundColor: 'teal'
    }
})