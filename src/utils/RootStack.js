/**
 * @class           RootStack
 * @description     root navigation stack constant
 * @author          Michael Lungu
 */

import { createStackNavigator } from 'react-navigation'
import Dashboard from '../screens/Dashboard'
import { PixelRatio } from 'react-native'
import TabStack from '../utils/TabStack'


// create stack navigator
const RootStack =  createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null
        }
    },
    Event: {
        screen: TabStack,
        navigationOptions: ({ navigation }) => {
            return {
                title: navigation.getParam('item', 'Event Details Screen').title,
                headerStyle: {
                    backgroundColor: '#e62b1e',
                    shadowRadius: 0,
                    elevation: 0
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontFamily: 'HelveticaNeueBold',
                    fontSize: PixelRatio.getPixelSizeForLayoutSize(9),
                    lineHeight: PixelRatio.getPixelSizeForLayoutSize(18),

                },
            }
        }
    }
})

export default RootStack