import React, { Component } from "react";
import { View, StyleSheet,Image, Text, TouchableHighlight} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"

export default class Pageone extends Component{
    render(){
        return(
            <View style = {styles.container}>
                    <Image style = {styles.imageView}
                    source={require('../assets/flower.jpg')}>
                    </Image>
                    <Text style = {styles.textView}>Learn as you go</Text>
                    <Text style = {styles.textView1}>Download the Stockpile app and master the market with our mini-lesson</Text>
                    
                 <TouchableHighlight
                 underlayColor= 'transparent'
                   onPress={() => this.props.navigation.navigate('Page two')}
                   style = {styles.button}>
                    <View style = {styles.fontContainer}>
                    <Icon style = {styles.iconStyle}
                     name="arrow-forward" size={32} color= '#fff'/>
                   </View>
                 </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    imageView: {
        height: '65%',
        width: '65%',
        marginTop: 15,
        borderRadius: 8
    },
    textView: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111',
        textAlign: 'center',
        marginTop: 25
    },
    textView1: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: 'gray'
    },
    button: {
        marginLeft: 220,
        justifyContent: 'center',
        marginTop: 30,
    },
    fontContainer: {
       height: 50,
       width: 50,
       backgroundColor: '#00ff00',
       borderRadius: 8
    },
    iconStyle: {
        marginLeft: 10,
        marginTop: 8
    }
})