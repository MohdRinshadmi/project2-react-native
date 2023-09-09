import React, {Component} from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Resources extends Component{
    render(){
        return(
            <View style = {styles.container}>
                {/* <View style = {styles.container2}> */}
                <Text>This is my Resources page</Text>
                {/* </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    // container2: {
    //     height: '40%',
    //     width: '100%',
    //     backgroundColor: '#001133'
    // }
})