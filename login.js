import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
export default class Login extends React.Component {

    render(){
        return(
            <View>
                <Text style={stylez.Logsty}>
                    ID
                </Text>
            </View>
        )
    }
}
const stylez = StyleSheet.create({
    Logsty:{
        justifyContent:'center',
        backgroundColor:'green',
        alignText:'center',
        Textsize:'10',
        fontWeight:'5',
        Textcolor:'Red',

    }
})