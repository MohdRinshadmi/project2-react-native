import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class MathsScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <TouchableHighlight style = {styles.button}
                onPress={() => this.props.navigation.navigate('Mathematics')}>
                <Icon style = {styles.icon1}
                 name="arrow-back-ios" size={20} color= '#00ff00'/>
                </TouchableHighlight>
                <Text style = {styles.headerFont}>Mathematics</Text>

                <Text style = {styles.textView}>How to get better at math </Text>
                <View style = {styles.container2}>
                <Icon style = {styles.iconStyle}
                 name="radio-button-checked" size={24} color= '#00ff00'/>
                 <Text style = {styles.font1}>Chapter 1</Text>
                  <Icon style = {styles.iconStyle}
                 name="radio-button-checked" size={24} color= '#00ff00'/>
                 <Text style = {styles.font1}>Part 3</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '25%',
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#001133',
        // top: 25,
        // left: 25
    },
    textView: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        top: 40,
        marginLeft: 25
    },
    container2: {
        flexDirection: 'row',
        right: 30,
        // marginTop: 10
    },
    iconStyle: {
        // left: 45,
        margin: 50,
        // top: 30
    },
    font1: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        top: 52,
        right: 40
    },
    headerFont: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    button: {
        width: 30,
        height: 30,
        // backgroundColor: '#fff',
        top: 30,
        left: 20,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 4
    },
    icon1: {
        left: 7,
        top: 3
    }
})