import React, { Component } from "react";
import { View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableHighlight } from "react-native";
import PhoneInput from "react-native-phone-number-input";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundView}
          source={require('../assets/flight.jpg')}>
        </ImageBackground>
        <Image style={styles.logoView}
          source={require('../assets/logo2.jpg')}>
        </Image>
        <View style={styles.smallContainer}>
          <Text style={styles.textView}>for more details, Login </Text>
          <TextInput style = {styles.inputView}
            placeholder='username'
            placeholderTextColor='#111'
            maxLength={10}>
          </TextInput>
          <TextInput style = {styles.inputView}
            placeholder='email'
            placeholderTextColor='#111'>
          </TextInput>
          <PhoneInput style = {styles.inputView}
          placeholder="Enter your phone number"
          />
          <TextInput style = {styles.inputView}
            placeholder='password'
            placeholderTextColor='#111'
            secureTextEntry = {true}
            maxLength={12}>
          </TextInput>
          <TouchableHighlight style = {styles.button}
          underlayColor= 'transparent'
          onPress={() => this.props.navigation.navigate('Register')}>
            <Text style = {styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  smallContainer: {
    height: '75%',
    width: '95%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  backgroundView: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
    // marginBottom: 10,
  },
  logoView: {
    height: 65,
    width: '50%',
    alignItems: 'flex-end',
    // justifyContent: 'center',
    marginBottom: 10
  },
  textView: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#111',
    marginTop: 15,
    textAlign: 'center',
    letterSpacing: 4
  },
  inputView: {
    width: '95%',
    // fontWeight: 'bold',
    height: 55,
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 8,
    paddingLeft: 20,
    borderColor: 'green',
    borderWidth: 1,
    marginTop: 30,
    marginLeft: 10
  },
  button: {
    width: '45%',
    height: 45,
    borderRadius: 8,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 100
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
    textAlign: 'center'
  }
})