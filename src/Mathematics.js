import React, { Component } from "react";
import { View, StyleSheet, Text, ImageBackground, Image, TextInput, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Mathematics extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.secondContainer}>
                <ImageBackground style = {styles.backgroundView}
                source={require('../assets/math.jpg')}>
                    <View style = {styles.icon1}>
                        <Icon name = 'play-circle' size={96} color= '#fff'/>
                    </View>
                </ImageBackground>
                </View>
                <View style = {styles.textContainer}>
                    <Text style = {styles.textFont}>How to get better at Mathematics</Text>
                    <Icon style = {styles.icon5}
                 name="download" size={20} color= '#fff'/>
                <Text style = {styles.text7}>Download</Text>
                </View>
               
                <View style = {styles.seperation}/>
                <View style = {styles.textContainer2}>
                    <Text style = {styles.text1}>Previous</Text>
                    <Icon style = {styles.icon2}
                    name="arrow-back-ios" size={24} color= 'gray'/>
                    <Text style = {styles.text2}>Part 1</Text>
                    <Icon style = {styles.icon3}
                    name="radio-button-checked" size={24} color= '#00ff00'/>
                    <Text style = {styles.text3}>Next</Text>
                    <Icon style = {styles.icon4} 
                    name="arrow-forward-ios" size={24} color= '#fff'/>
                </View>
                <View style = {styles.seperation}/>
                <View style = {styles.profileContainer}>
                    <View style = {styles.flexDirection}>
                <Text style = {styles.profileText}>Your sample question can be shown here no matter how long</Text>
                </View>
                    <View style = {styles.profileIcon}>
                        <Image source={require('../assets/deer2.jpg')}
                        style = {styles.iconView}>
                        </Image>
                    </View>
                </View>
                <View style = {styles.inputContainer}>
                    <TextInput style = {styles.inputView}
                    placeholder=   "Ask a question?"
                    placeholderTextColor= '#fff'/>
                </View>
                {/* {/* <View style = {styles.inputContainer}> */}
                    <TouchableHighlight style = {styles.button}>
                        <Text style = {styles.text5}>Post</Text>
                    </TouchableHighlight>
                {/* </View> */} 
                {/* <View style = {styles.icon2}> */}
                    
                {/* </View> */}
                
                <TouchableHighlight style = {styles.button1}>
                    <Text style = {styles.text6}>Chat with teacher</Text>
                </TouchableHighlight>
                <Icon style = {styles.icon}
                    name="call" size={24} color= '#00ff00'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001133'
    },
    backgroundView: {
        height: 175,
        width: '100%'
    },
    secondContainer: {
        height: '30%',
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row'
    },
    textFont: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        bottom: 15,
        borderRightWidth: 2,
        borderRightColor: 'gray',
        paddingHorizontal: 10,
        left: 10
    },
    seperation: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginTop: 15
    },
    textContainer2: {
        flexDirection: 'row'
    },
    text1: {
        fontSize: 16,
        fontWeight: '500',
        color: 'gray',
        top: 15,
        left: 23
    },
    text2: {
        fontSize: 16,
        fontWeight: '500',
        color: '#00ff00',
        marginTop: 15,
        marginHorizontal: 110
    },
    text3: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        top: 15,
        right: 45
    },
    profileContainer: {
        height: '12%',
        width: '90%',
        backgroundColor: '#000',
        flexDirection: 'row',
        position: 'relative',
        top: 120,
        marginLeft: 20,
        borderRadius: 8,
        // borderWidth: 2,
        // borderColor: '#00ff00'
    },
    profileIcon: {
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        borderRadius: 50,
        right: 45,
        top: 35
    },
    iconView: {
        height: '100%',
        width: '100%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#00ff00'
    },
    profileText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#fff',
        // textAlign: 'auto',
        // marginRight: 100,
        marginLeft: 10,
        marginTop: 10
    },
    text4: {
        flexDirection: 'column'
    },
    inputView: {
        width: '90%',
        height: 65,
        backgroundColor:  "rgba(0, 0, 0, 0.5)",
        borderWidth: 1,
        borderColor: '#fff',
        paddingLeft: 20,
        borderRadius: 8,
        color: '#fff'
    },
    inputContainer: {
        flexDirection: 'row',
        top: 130,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    button: {
        width: 60,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 8,
        top: 78,
        left: 290
    },
    text5: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#001133',
        paddingLeft: 13,
        paddingTop: 7
    },
    button1: {
        width: '90%',
        height: 70,
        backgroundColor: '#001133',
        borderWidth: 1,
        borderColor: '#00ff00',
        paddingLeft: 20,
        borderRadius: 8,
        color: '#fff',
        top: 110,
        left: 20
    },
    text6: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00ff00',
        letterSpacing: 2,
        left: 75,
        top: 20
    },
    icon1: {
        top: 30,
        left: 150
    },
    icon: {
        top: 60,
        left: 75
    },
    icon2: {
        right: 60,
        top: 15
    },
    icon3: {
        right: 180,
        top: 15
    },
    icon4: {
        right: 40,
        top: 15
    },
    text7: {
        fontSize: 12,
        fontWeight: '400',
        color: '#fff',
        // left: 320,
        top: 5,
        left: 5
    },
    icon5: {
        bottom: 20,
        left: 40
    }
})