import React, {Component} from "react";
import { View, StyleSheet, Text, TouchableHighlight} from "react-native";

class FlexContent extends Component{
    render(){
        return(
            <View>
                <Text style= {styles.contentStyle}>My name is {this.props.name}</Text>
            </View>
        )
    } 
}

export default class Flexbox extends Component{
    constructor(){
        super();
        this.state= {
            main_text: 'Click Update to reach our page',
            sub_text: '(...)'
        }
    }

    updateText(){
        this.setState({
            main_text: 'Welcome to React Native journey',
            sub_text: '0.68.2'
        })
    }

    render(){
        return(
            <View style= {styles.container}>
                <Text style = {styles.textView}>{this.state.main_text}</Text>
                <Text style = {styles.textView}>{this.state.sub_text}</Text>
                <TouchableHighlight style= {styles.button}
                underlayColor='transparent'
                onPress={()=> this.updateText()}>
                    <Text style= {styles.buttonText}>UPDATE</Text>
                </TouchableHighlight>

                <FlexContent name = 'Rinshad'>

                </FlexContent>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row'
    },
    textView: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        height: 55,
        width: '65%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        borderRadius:7,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    contentStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    }
})