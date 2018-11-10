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
    Partners: Partners,
    Programme: Programme
}, {
    tabBarOptions: {
        indicatorStyle: {
            color: 'white',
            backgroundColor: 'white'
        },
        labelStyle: {
            // fontSize: 9
        },
        style: {
            fontFamily: 'HelveticaNeueBold',
            backgroundColor: '#e62b1e',
        },
    }
})

// export tab stack
export default TabStack