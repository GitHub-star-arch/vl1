import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import Login from './screens/login.js';
import Search from './screens/search.js';
export default class App extends React.Component {

    render(){
        return(
            <View>
              <AppContainer/>
            </View>
        )
    }
}
var tabContainer = createBottomTabNavigator({
  Login:{screen:Login},
  Search:{screen:Search}
})
const AppContainer = createAppContainer(tabContainer)