import React, { Component } from "react";
import { View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableHighlight, Modal } from "react-native";

export default class Studentdetails extends Component {
    constructor() {
        super();
        this.state = {
            isStateVisible: false,
            selectedState: ""
        }
    }

    pickState = () => {
        this.setState((options) => ({
            isStateVisible: !options.isStateVisible,
        }))
    }

    selectState = (state) => {
        this.setState({
          selectedState: state,
          isStateVisible: false,
        })
      }
    render() {
        const { isStateVisible, selectedState } = this.state;
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
                <Text style={styles.textView}>Student details</Text>
                <View style={styles.smallContainer}>
                    <TextInput style={styles.inputText}
                        placeholder="Full name"
                        placeholderTextColor='#fff'
                    />
                    <TextInput style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor='#fff' />
                    <TouchableHighlight
                        style={styles.inputText}
                        underlayColor="#001133"
                        onPress={this.pickState}>
                        <Text style={styles.inputtextValue}>
                            {selectedState ? selectedState : "Select state"}
                        </Text>
                    </TouchableHighlight>
                    <TextInput style={styles.inputText}
                        placeholder="Pin code"
                        placeholderTextColor='#fff' />
                         <TouchableHighlight style={styles.button}
                        underlayColor='transparent'
                        onPress={() => this.props.navigation.navigate('School board')}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableHighlight>
                    <Modal
                        visible={isStateVisible}
                        animationType="slide"
                        transparent={true}>
                     <View style={styles.modalContainer}>
                        {IndianStates.map((state) => (
                          <TouchableHighlight
                            key={state}
                            style={styles.modalItem}
                            underlayColor="#001133"
                            onPress={() => this.selectState(state)}>
                            <Text style={styles.modalText}>{state}</Text>
                          </TouchableHighlight>
                    ))}
                    </View>
                          
                    </Modal>
                </View>
            </View>
        )
    }
}

const IndianStates = [
    
"Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chhattisgarh",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jharkhand",
"Karnataka",
"Kerala",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttarakhand",
"Uttar Pradesh",
"West Bengal"
]



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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
        marginTop: 50,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    imageView1: {
        height: '100%',
        width: '100%'
    },
    smallContainer: {
        height: '55%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00021e',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

    },
    textView: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
        letterSpacing: 1
    },
    inputText: {
        width: '90%',
        // fontWeight: 'bold',
        color: 'white',
        height: 55,
        borderRadius: 4,
        // paddingLeft: 20,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: '#001133'
    },
    button: {
        width: '85%',
        height: 55,
        backgroundColor: '#00ff00',
        borderRadius: 4,
        marginTop: 25,
        // marginBottom: 35
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
        letterSpacing: 1
    },
    inputtextValue: {
        fontSize: 14,
        // fontWeight: 'bold',
        color: '#fff',
        textAlign: 'left',
        marginTop: 15,
        marginLeft: 5
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      modalItem: {
        width: '80%',
        height: 50,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
      },
      modalText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
      }
})