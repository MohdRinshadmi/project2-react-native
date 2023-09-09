import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Logout extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.textView}>This is my Logout page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textView: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})