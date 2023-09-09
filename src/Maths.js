import React, { Component } from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Maths extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <ImageBackground style = {styles.backgroundView}
                source={require('../assets/inmakes3.jpg')}>
                    <Text>Mathematics</Text>
                    <Text style = {styles.textView}>Mathematics</Text>
                    <View style = {styles.iconContainer}>
                        <Icon style = {styles.iconStyle} name="radio-button-checked" size={24} color= '#00ff00'/>
                        <Text style = {styles.textView1}>12 Chapters</Text>
                        <Icon style = {styles.iconStyle} name="radio-button-checked" size={24} color= '#00ff00'/>
                        <Text style = {styles.textView1}>124 Hours</Text>   
                    </View>
                        <View style = {styles.secondContainer}>
                        <View style = {styles.smallContainer}>
                            <Text style = {styles.font1}
                            onPress={() => this.props.navigation.navigate('Tab')}>How to get better at Mathematics</Text>
                            <View style = {styles.iconContainer}>
                                <Icon style = {styles.iconStyle1}
                                name="radio-button-checked" size={24} color= 'gray'/>
                                <Text style = {styles.iconFont1}>Chapter 1</Text>
                                <Icon style = {styles.iconStyle1}
                                name="radio-button-checked" size={24} color= 'gray'/>
                                <Text style = {styles.iconFont1}>3 Parts</Text>
                            </View>
                        </View>
                        <View style = {styles.seperation}/>
                        <View style = {styles.smallContainer}>
                            <Text style = {styles.font1}>How to get better at Mathematics</Text>
                            <View style = {styles.iconContainer}>
                                <Icon style = {styles.iconStyle1}
                                name="radio-button-checked" size={24} color= 'gray'/>
                                <Text style = {styles.iconFont1}>Chapter 1</Text>
                                <Icon style = {styles.iconStyle1}
                                name="radio-button-checked" size={24} color= 'gray'/>
                                <Text style = {styles.iconFont1}>3 Parts</Text>
                            </View>
                        </View>
                        <View style = {styles.seperation}/>
                        <View style = {styles.smallContainer}>
                            <Text style = {styles.font1}>How to get better at Mathematics</Text>
                            <View style = {styles.iconContainer}>
                                <Icon style = {styles.iconStyle1}
                                name="radio-button-checked" size={24} color= 'gray'/>
                                <Text style = {styles.iconFont1}>Chapter 1</Text>
                                <Icon style = {styles.iconStyle1}
                                name="radio-button-checked" size={24} color= 'gray'/>
                                <Text style = {styles.iconFont1}>3 Parts</Text>
                            </View>
                        </View>
                        <View style = {styles.seperation}/>
                        <View style = {styles.smallContainer}>
                            <Text style = {styles.font1}>How to get better at Mathematics</Text>
                            <View style = {styles.iconContainer}>
                                <Icon style = {styles.iconStyle1}
                                name="radio-button-checked" size={24} color= 'gray'/>
                                <Text style = {styles.iconFont1}>Chapter 1</Text>
                                <Icon style = {styles.iconStyle1}
                                name="radio-button-checked" size={24} color= 'gray'/>
                                <Text style = {styles.iconFont1}>3 Parts</Text>
                            </View>
                        </View>
                        <View style = {styles.seperation}/>
                        <View style = {styles.smallContainer}>
                            <Text style = {styles.font1}>How to get better at Mathematics</Text>
                            <View style = {styles.iconContainer}>
                                <Icon style = {styles.iconStyle1}
                                name="radio-button-checked" size={24} color= 'gray'/>
                                <Text style = {styles.iconFont1}>Chapter 1</Text>
                                <Icon style = {styles.iconStyle1}
                                name="radio-button-checked" size={24} color= 'gray'/>
                                <Text style = {styles.iconFont1}>3 Parts</Text>
                            </View>
                        </View>
                        <View style = {styles.seperation}/>
                    
                        </View>
                </ImageBackground>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        // backgroundColor: '#fff'
    },
    backgroundView: {
        width: '100%',
        height: '100%',
        // bottom: 30
    },
    textView: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'left',
        top: 95,
        marginLeft: 30,
        position: 'absolute'

    },
    iconContainer: {
        flexDirection: 'row',
        // top: 115,
        // left: 20
    },
    iconStyle: {
        // marginLeft: 50
        // marginHorizontal: 40
        margin: 10
    },
    textView1: {
        fontSize: 16,
        fontWeight: '400',
        color: '#fff',
        right:5,
        marginTop: 13
    },
    secondContainer: {
        height: '90%',
        width: '75%',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
        left: 50,
        top: 140
    },
    smallContainer: {
        height: '16%',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4
    },
    font1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        left: 10
    },
    iconContainer: {
        flexDirection: 'row',
        top: 120,
        left: 17
    },
    iconFont1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
        marginTop: 11,
        marginLeft: 15
    },
    iconStyle1: {
        marginTop: 10,
        left: 10
    },
    seperation: {
        marginTop: 10
    }
})