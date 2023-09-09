import React, { Component } from "react";
import { View, StyleSheet,Image, Text, TouchableHighlight} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"

export default class Pagefive extends Component{
    render(){
        return(
            <View style = {styles.container}>
                    <Image style = {styles.imageView}
                    source={require('../assets/flower.jpg')}>
                    </Image>
                    <Text style = {styles.textView}>Another title page</Text>
                    <Text style = {styles.textView1}>Another beautiful body text for this example onboarding</Text>
                    
                 <TouchableHighlight
                 underlayColor= 'transparent'
                   onPress={() => this.props.navigation.navigate('Drawer')}
                   style = {styles.button}>
                   <Text style = {styles.text1}>Done</Text>
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
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
})