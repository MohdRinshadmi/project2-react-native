import React, {Component} from "react";
import { ImageBackground, TouchableHighlight } from "react-native";
import { View, StyleSheet, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Videos extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.container2}>
                <ImageBackground style = {styles.imageView}
                    source={require('../../assets/math.jpg')}> 
                    <View>
                    <TouchableHighlight style = {styles.button}>
                        <Text style = {styles.buttonText}>Mathematics</Text>
                    </TouchableHighlight> 
                    </View> 
                                       
                    </ImageBackground>
                      
                    <Text style = {styles.textView}>How to get better at math</Text>
                    <View style = {styles.iconContainer}>
                        <View>
                        <Icon style = {styles.iconStyle}
                        name="radio-button-checked" size={24} color= 'gray'/>
                        <Text style = {styles.iconText}>Chapter 1</Text>
                        </View>
                        <View>
                        <Icon style = {styles.iconStyle1}
                        name="radio-button-checked" size={24} color= 'gray'/>
                        <Text style = {styles.iconText1}>Part 1</Text>
                        </View>
                    </View>

                    
                </View>

                <View style = {styles.container2}>
                    <ImageBackground style = {styles.imageView}
                    source={require('../../assets/math.jpg')}> 
                    <View>
                    <TouchableHighlight style = {styles.button}>
                        <Text style = {styles.buttonText}>Mathematics</Text>
                    </TouchableHighlight> 
                    </View>                      
                    </ImageBackground>
                    <Text onPress={() => this.props.navigation.navigate('Mathematics')}
                    style = {styles.textView}>How to get better at math</Text>
                    <View style = {styles.iconContainer}>
                        <View>
                        <Icon style = {styles.iconStyle}
                        name="radio-button-checked" size={24} color= 'gray'/>
                        <Text style = {styles.iconText}>Chapter 1</Text>
                        </View>
                        <View>
                        <Icon style = {styles.iconStyle1}
                        name="radio-button-checked" size={24} color= 'gray'/>
                        <Text style = {styles.iconText1}>Part 1</Text>
                        </View>
                    </View>

                    
                </View>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'ash'
    },
    container2: {
        height: '40%',
        width: '95%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        borderWidth: 1,
        borderColor: '#fff',
        left: 15
    },
    imageView: {
        height: 140,
        width: '90%',
        // marginTop: 40
        // top: 200
        // marginBottom: 10
        left: 10
    },
    textView: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        letterSpacing: 2
    },
    iconContainer: {
        flexDirection: 'row'
    },
    iconText: {
        fontSize: 16,
        color: 'gray',
        right: 75,
        bottom: 13
    },
    iconStyle: {
        // marginBottom: 10,
        right: 110,
        top: 10
        
    },
    iconText1: {
        fontSize: 16,
        color: 'gray',
        // right: 65,
        bottom: 11,
        left: 20
    },
    iconStyle1: {
        // marginBottom: 10,
        right: 15,
        top: 12
        
    },
    button: {
        width: 65,
        height: 25,
        backgroundColor: '#00ff00',
        // borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        left: 220,
        top: 100
    },
    buttonText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff'
    }
})