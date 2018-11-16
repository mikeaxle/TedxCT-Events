import React, {Component} from 'react'
import {Text, View, PixelRatio, StyleSheet, Image} from 'react-native'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class Map extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Map</Text>
                <Text style={styles.title}>{this.props.address}</Text>
                <View style={styles.map}>
                    <Image source={require('../assets/image/map1.png')} style={styles.mapImg}/>
                    {/*<MapView*/}
                        {/*provider={PROVIDER_GOOGLE} // remove if not using Google Maps*/}
                        {/*style={styles.mapView}*/}
                        {/*region={{*/}
                            {/*latitude: this.props.coordinates.latitude,*/}
                            {/*longitude: this.props.coordinates.longitude,*/}
                            {/*latitudeDelta: 0.015,*/}
                            {/*longitudeDelta: 0.0121,*/}
                        {/*}}*/}
                    {/*>*/}
                    {/*</MapView>*/}
                </View>
            </View>
        )
    }
}


// styles
const styles = StyleSheet.create({
    container: {
        marginTop: 15 * PixelRatio.get(),
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
        // ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: 157.5 * PixelRatio.get(),
        justifyContent: 'flex-end',
        alignItems: 'center',
        elevation: 15,
        backgroundColor: 'red'
    },
    mapImg: {
        width: '100%',
        height: '100%',
    },
    mapView: {
        ...StyleSheet.absoluteFillObject,
    }
})