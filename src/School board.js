import React, { Component } from "react";
import { ImageBackground, View, StyleSheet, Image, Text, TouchableHighlight, Modal } from "react-native";

export default class Schoolboard extends Component {
    constructor() {
        super()
        this.state = {
            isBoardVisible: false,
            isClassVisible: false,
            selectedBoard: "",
            selectedClass: ""
        }
    }

    pickBoard = () => {
        this.setState((options) => ({
            isBoardVisible: !options.isBoardVisible
        }))
    }

    pickClass = () => {
        this.setState((options) => ({
            isClassVisible: !options.isClassVisible
        }))
    }

    selectBoard = (board) => {
        this.setState({
            selectedBoard: board,
            isBoardVisible: false
        })
    }

    selectClass = (classLevel) => {
        this.setState({
            selectedClass: classLevel,
            isClassVisible: false
        })
    }

    render() {
        const { isBoardVisible, isClassVisible, selectedBoard, selectedClass } = this.state;
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
                <Text style={styles.textView}>Select your school board</Text>
                <View style={styles.smallContainer}>
                    <TouchableHighlight style={styles.inputText}
                        placeholderTextColor='#fff'
                        onPress={this.pickBoard}>
                    <Text style={styles.inputTextValue}>
                        {selectedBoard ? selectedBoard : "Select Board"}
                    </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.inputText}
                        placeholder="Select Class"
                        placeholderTextColor='#fff'
                        onPress={this.pickClass}>
                    <Text style={styles.inputTextValue}>
                        {selectedClass ? selectedClass : "Select Class"}
                    </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}
                    underlayColor= 'transparent'
                    onPress={() => this.props.navigation.navigate('Page one')}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableHighlight>
                </View>
                <Modal
                    visible={isBoardVisible}
                    animationType="slide"
                    transparent={true}>
                    <View style = {styles.modalContainer}>
                        {BoardOptions.map((board) => (
                            <TouchableHighlight
                                key={board}
                                style={styles.modalItem}
                                underlayColor="#001133"
                                onPress={() => this.selectBoard(board)}>
                                <Text style={styles.modalText}>{board}</Text>
                            </TouchableHighlight>
                        ))}
                    </View>
                </Modal>
                <Modal
                    visible={isClassVisible}
                    animationType="slide"
                    transparent={true}>
                    <View style = {styles.modalContainer}>
                        {ClassOptions.map((classLevel) => (
                            <TouchableHighlight
                                key={classLevel}
                                style={styles.modalItem}
                                underlayColor="#001133"
                                onPress={() => this.selectClass(classLevel)}>
                                <Text style={styles.modalText}>{classLevel}</Text>
                            </TouchableHighlight>
                        ))}
                    </View>
                </Modal>

            </View>
        )
    }
}

const BoardOptions = [
    "STATE",
    "ICSE",
    "CBSE"
]

const ClassOptions = [
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12"
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
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    iconContainer: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 45,
        marginTop: 50,
    },
    imageView1: {
        height: '100%',
        width: '100%'
    },
    textView: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        letterSpacing: 1,
        textAlign: 'center',
        marginBottom: 20
    },
    smallContainer: {
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00021e',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
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
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:  "rgba(0, 0, 0, 0.5)"
    },
    modalItem: {
        width: "80%",
        height: 50,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        marginTop: 10,
        backgroundColor: '#fff'
    },
    modalText: {
        fontSize: 16,
        color: "#000",
        textAlign: "center",
    },
    inputTextValue: {
        color: "#fff",
        marginTop: 15,
        marginLeft: 5
    },
    
})