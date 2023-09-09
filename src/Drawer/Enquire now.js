import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Enquirenow extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.textView}>This is my Enquire now page</Text>
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