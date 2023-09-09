import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Downloads extends Component{
    render(){
        return(
            <View>
                <Text style = {styles.textView}>This is my Downloads page</Text>
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