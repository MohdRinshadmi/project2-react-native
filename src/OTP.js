import React, { Component, createRef } from "react";
import { View, StyleSheet, Text, ImageBackground, Image, TextInput, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class OTP extends Component {
    constructor() {
        super();
        this.inputNumber = [
            createRef(),
            createRef(),
            createRef(),
            createRef(),
            createRef(),
            createRef(),
        ]
    }

    nextInputField(index) {
        if (index < this.inputNumber.length - 1) {
            this.inputNumber[index + 1].current.focus()
        }
    }
    render() {
        const { route } = this.props
        const { mobileNumber } = route.params
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.imageView}
                    source={require('../assets/inmakes1.png')}>
                </ImageBackground>
                <View style={styles.container2}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../assets/inmakes2.png')}
                            style={styles.imageView1}>
                        </Image>
                    </View>
                </View>
                <Text style={styles.textView}>Verification code</Text>
                <Text style={styles.textView2}>Please type the verification code sent to</Text>
                <Text style={styles.mobileText}>{mobileNumber}</Text>
                <View style={styles.smallContainer}>
                    <View style={styles.inputView}>
                        {Array.from({ length: 6 }, (_, index) => (
                            <TextInput style={styles.inputText1}
                                placeholder=""
                                maxLength={1}
                                ref={this.inputNumber[index]}
                                key={index}
                                keyboardType="numeric"
                                onChangeText={(text) => {
                                    if (text.length === 1) {
                                        this.nextInputField(index);
                                    }
                                }}
                                onKeyPress={({ nativeEvent }) => {
                                    if (nativeEvent.key === "Backspace" && index > 0) {
                                        this.inputNumber[index - 1].current.focus();
                                    }
                                }}
                            />
                        ))}
                    </View>


                    <TouchableHighlight style={styles.button}
                        underlayColor='transparent'
                        onPress={() => this.props.navigation.navigate('Student details')}>
                        <Text style={styles.buttonText}>Resend OTP</Text>
                    </TouchableHighlight>
                    <Text style={styles.smallText}>Resend after 28s</Text>
                    <Icon style = {styles.iconStyle}
                    name="call" size={24} color= '#00ff00'/>
                    <Text style = {styles.text1}>Contact us</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white'
    },
    imageView: {
        height: 65,
        width: '85%',
        marginLeft: 35,
        marginTop: 25
    },
    iconContainer: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 45,
        marginTop: 80,
        // marginLeft: 5
        // marginBottom: 90
    },
    imageView1: {
        height: '100%',
        width: '100%',
        // marginTop: 40
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    smallContainer: {
        height: '35%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00021e',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    inputText1: {
        width: '12%',
        color: 'white',
        height: 50,
        borderRadius: 4,
        // paddingLeft: 20,
        // marginBottom: 90,
        marginLeft: 8,
        backgroundColor: '#001133',
        top: 10
    },
    inputView: {
        flexDirection: 'row'
    },
    button: {
        width: '85%',
        height: 55,
        backgroundColor: '#00ff00',
        borderRadius: 4,
        marginTop: 25,
        marginBottom: 35
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
        letterSpacing: 1
    },
    textView: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        // marginBottom: 5,
        marginTop: 50,
        textAlign: 'center'
    },
    textView2: {
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 5
    },
    smallText: {
        fontSize: 10,
        color: '#fff',
        bottom: 25
    },
    mobileText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
        textAlign: 'center',
        marginBottom: 20
    },
    iconStyle: {
        // marginTop: 10
        right:53
    },
    text1: {
        fontSize: 16,
        // fontWeight: '800',
        color: '#00ff00',
        left: 5,
        bottom: 23
    }

})
