/**
 * Tedx Cape Town Event Programme Mobile Appt
 * http://tedxcapetown.org
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import RootStack from './src/utils/RootStack'
import codePush from "react-native-code-push";

type Props = {};

class App extends Component<Props> {
    render() {
        return (
            <RootStack/>

        );
    }
}

// codepush options
let codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_START,
    installMode: codePush.InstallMode.IMMEDIATE,
    updateDialog: true,
}


// wrap app in codepush
export default App = codePush(codePushOptions)(App)