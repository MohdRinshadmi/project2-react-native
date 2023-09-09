import React, { Component } from "react";
import { View, StyleSheet, Text, ImageBackground, TouchableHighlight, TextInput } from "react-native";
// import PhoneInput from "react-native-phone-number-input";

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            mobileNumber: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundView}
                    source={require('../assets/inmakes1.png')}>
                </ImageBackground>
                <Text style={styles.textView}>Enter your mobile number</Text>
                <Text style={styles.smallText}>We will send you an OTP to verify</Text>
                <View style={styles.smallContainer}>
                    <View style = {styles.inputView}>
                        <TextInput style = {styles.inputText1}
                        placeholder="+91"
                        placeholderTextColor= 'white'
                        />
                        <TextInput style = {styles.inputText}
                        placeholder="Mobile number"
                        placeholderTextColor='white'
                        onChangeText={(text) => this.setState({mobileNumber: text})}
                        />
                    </View>
                    <TouchableHighlight style = {styles.button}
                    underlayColor= 'transparent'
                    onPress={() => this.props.navigation.navigate('OTP',{
                        mobileNumber: this.state.mobileNumber
                    }
                    )}>
                        <Text style = {styles.buttonText}>Continue</Text>
                    </TouchableHighlight>
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'white'
    },
    backgroundView: {
        height: 65,
        width: '85%',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginLeft: 35
    },
    smallContainer: {
        height: '25%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00021e',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    textView: {
        fontSize: 22,
        fontWeight: '600',
        color: 'white',
        marginBottom: 5,
        marginTop: 200,

    },
    smallText: {
        fontSize: 14,
        color: 'white',
        marginBottom: 15,

    },
    inputView: {
        flexDirection: 'row',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start'
    },
    inputText: {
        width: '65%',
        // fontWeight: 'bold',
        color: 'white',
        height: 55,
        borderRadius: 4,
        // paddingLeft: 20,
        // marginTop: 30,
        marginLeft: 10,
        backgroundColor: '#001133'
    },
    inputText1: {
        width: '15%',
        color: 'white',
        height: 55,
        borderRadius: 4,
        // paddingLeft: 20,
        // marginTop: 30,
        marginLeft: 10,
        backgroundColor: '#001133'
    },
    button: {
        width: '85%',
        height: 55,
        backgroundColor: '#00ff00',
        borderRadius: 4,
        marginTop: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
        letterSpacing: 1
    }
})