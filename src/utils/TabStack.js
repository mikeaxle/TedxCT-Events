/**
 * @class           TabStack
 * @description     tab navigation stack constant
 * @author          Michael Lungu
 */

import React from 'react';
import { PixelRatio } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation';
import About from '../screens/About'
import Partners from '../screens/Partners'
import Programme from '../screens/Programme'

// create tab navigator
const TabStack = createMaterialTopTabNavigator({
    About: About,
    Programme: Programme,
    Partners: Partners,

}, {
    tabBarOptions: {
        indicatorStyle: {
            color: 'white',
            backgroundColor: 'white'
        },
        upperCaseLabel: false,
        labelStyle: {
            fontFamily: 'HelveticaNeue',
            fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
            lineHeight: PixelRatio.getPixelSizeForLayoutSize(12),
            color: '#fff',
            margin: 0,
            padding: 0,
        },
        style: {
            backgroundColor: '#e62b1e',
        },
    }
})

// export tab stack
export default TabStack