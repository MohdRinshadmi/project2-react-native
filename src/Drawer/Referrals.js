import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Referrals extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>This is my Referrals page</Text>
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