import React, {Component} from "react";
import{
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";

export default class App extends Component {
  render(){
    return(
      <View style= {styles.container}>
        <ImageBackground source={require('./content/bg2.jpeg')}
          style= {styles.backgroundImage}>
            <Image source={require('./content/bg5.jpeg')}
              style= {styles.logo}>
            </Image>
            <Text style= {styles.textView}> Welcome to React Native </Text>
            <TextInput style= {styles.inputView}
              placeholder="Username"
              placeholderTextColor='black'
              maxLength={10}>
            </TextInput>
            <TextInput style= {styles.inputView}
              placeholder="Password"
              placeholderTextColor= 'black'
              secureTextEntry= {true}>
            </TextInput>
            <TouchableHighlight style= {styles.buttonView}>
              <Text style={styles.buttonText}> Login </Text>
            </TouchableHighlight>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    height: '100%',
    width: '100%',
    backgroundColor: '#d4bade'
  },
  backgroundImage: {
    height: '100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 10
  },
  textView: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  inputView: {
    width: '80%',
    height: 55,
    backgroundColor: '#d4bade',
    borderWidth: 1,
    marginTop: 50,
    paddingLeft: 20
  },
  buttonView: {
    width: '60%',
    height: 55,
    backgroundColor: '#f76fd5',
    marginTop: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'normal'
  }
})