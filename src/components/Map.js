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
        fontFamily: 'HelveticaNeueBold',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(11),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.31)
    },
    title: {
        fontFamily: 'HelveticaNeue',
        paddingTop: 7 * PixelRatio.get(),
        paddingBottom: 10 * PixelRatio.get(),
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6.5),
        lineHeight: PixelRatio.getPixelSizeForLayoutSize(8),
        letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.16)

    },
    map: {
        width: '100%',
        height: 157.5 * PixelRatio.get(),
        backgroundColor: 'teal'
    }
})