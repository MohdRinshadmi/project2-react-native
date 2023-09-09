import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableHighlight, Modal, FlatList, ImageBackground, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { subject } from "../utils/Data";
import { classVideos } from "../utils/thumbnail";
import { target } from "../utils/classes";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            isClassVisible: false,
            selectedClass: ""
        };
    }

    pickClass = () => {
        this.setState((options) => ({
            isClassVisible: !options.isClassVisible
        }));
    };

    selectClass = (classLevel) => {
        this.setState({
            selectedClass: classLevel,
            isClassVisible: false
        });
    };

    renderSubject = ({ item }) => {
        return (
            <View style={styles.subjectContainer}>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="transparent"
                    onPress={() => {
                        if (item.name === 'Mathematics') {
                            this.props.navigation.navigate('Maths');
                        }
                    }}
                >
                    <Text style={styles.font1}>{item.name}</Text>
                </TouchableHighlight>
                <Icon style={styles.icon2} name="radio-button-checked" size={24} color='#00ff00' />
            </View>
        );
    };

    renderThumbnail = ({ item }) => {
        return (
            <Image source={item.imgUrl} style={styles.image} />
        );
    };

    renderClasses = ({ item }) => {
        return (
            <View style={styles.renderImage}>
                {/* <View style={styles.classesContainer}> */}
                    <ImageBackground style={styles.classesImage} source={{ uri: item.imgUrl }}>
                        <View style={styles.profileIcon}></View>
                        <Text style={styles.text5}>{item.name}</Text>
                        <Text style={styles.text6} numberOfLines={4}>{item.name1}</Text>
                        <TouchableHighlight style={styles.button1}>
                            <Text style={styles.buttonText}>Book a free class</Text>
                        </TouchableHighlight>
                    </ImageBackground>
                {/* </View> */}
             </View>
        );
    };

    render() {
        const { isClassVisible, selectedClass } = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableHighlight style = {styles.button2}>
                    <Icon style = {styles.icon3}
                    onPress={() => this.props.navigation.navigate('Drawer')}
                    name="grid-view" size={32} color= '#00ff00'/>
                    </TouchableHighlight>
                    <TouchableHighlight style = {styles.button3}>
                        <Icon style = {styles.icon4}
                        name="radio-button-checked" size={24} color= 'green'/>
                    </TouchableHighlight>
                    <Text style = {styles.text7}>Classes</Text>
                    <View style={styles.container2}>
                        <Image style={styles.imageView} source={require('../../assets/inmakes1.png')}></Image>
                    </View>
                    <Text style={styles.textView1}>Good Morning</Text>
                    <Text style={styles.textView2}>Mohammed Rinshad</Text>
                    <TouchableHighlight style={styles.classContainer} onPress={this.pickClass}>
                        <View>
                            <Icon style={styles.icon1} name="expand-more" size={24} color='#fff' />
                            <Text style={styles.text1}>Class</Text>
                            <Text style={styles.text2}>
                                {selectedClass ? selectedClass : 'Select Class'}
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <Modal
                        visible={isClassVisible}
                        animationType="slide"
                        transparent={true}
                    >
                        <View style={styles.modalContainer}>
                            {classOptions.map((classLevel) => (
                                <TouchableHighlight
                                    key={classLevel}
                                    style={styles.modalItem}
                                    underlayColor='#001133'
                                    onPress={() => this.selectClass(classLevel)}
                                >
                                    <Text style={styles.modalText}>{classLevel}</Text>
                                </TouchableHighlight>
                            ))}
                        </View>
                    </Modal>

                    <FlatList
                        data={subject}
                        horizontal={true}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderSubject}
                    />

                    <FlatList
                        data={classVideos}
                        horizontal={true}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderThumbnail}
                        contentContainerStyle={styles.thumbnailContainer}
                    />

                    <FlatList
                        data={target}
                        horizontal={true}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderClasses}
                    />

                </View>
            </ScrollView>
        );
    }
}

const classOptions = [
    'Class 1',
    'Class 2',
    'Class 3',
    'Class 4',
    'Class 5',
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11',
    'Class 12'
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container2: {
        height: '5%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageView: {
        height: 40,
        width: '40%',
        right: 40,
        bottom: 75
    },
    textView1: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        textAlign: 'left',
        left: 25,
        bottom: 30
        
    },
    textView2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
        left: 25,
        bottom: 30,
    },
    classContainer: {
        height: '8%',
        width: '85%',
        backgroundColor: '001133',
        // alignItems: 'center',
        // justifyContent: 'center',
        // bottom: 40,
        left: 25,
        borderRadius: 8
    },
    text1: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        letterSpacing: 1,
        left: 30,
        bottom: 15
    },
    text2: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        left: 30,
        bottom: 15
    },

    modalContainer: {
        flex: 1,
        // height: 50,
        // width: '50%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
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
    icon1: {
        left: 270,
        top: 20
    },
    subjectContainer: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        // margin: 10,
        marginHorizontal: 10,
        backgroundColor: 'fff',
        top: 15,
        left: 20,
        // marginVertical: -120
    },
    button: {
        height: 50,
        width: 135,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#000',
        // marginTop: 10,
        // marginLeft: 10,
        top: 10
    },
    font1: {
        fontSize: 16,
        top: 8,
        color: '#000',
        textAlign: 'left',
        left: 32
    },
    icon2: {
        bottom: 30,
        right: 50
    },
    image: {
        width: 220,
        height: 150,
        marginHorizontal: 10,
        left: 20,
        top: 20
    },
    classesImage: {
        height: 350,
        width: 320,
        marginRight: 30,
        left: 32,
        marginTop: 15

    },
    profileIcon: {
        height: 80,
        width: 80,
        borderRadius: 50,
        backgroundColor: 'gray',
        left: 25,
        top: 10
    },
    text5: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        left: 20,
        top: 15
    },
    text6: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
        left: 15,
        top: 30
    },
    button1: {
        width: 130,
        height: 50,
        backgroundColor: '#00ff00',
        top: 70,
        left: 90,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
    icon3: {
        left: 9,
        top: 3.5

    },
    button2: {
        width: 50,
        height: 40,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000',
        top: 25,
        left: 15
    },
    button3: {
        width: 100,
        height: 40,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#00ff00',
        left: 280,
        bottom: 15
    },
    text7: {
        left: 290,
        bottom: 47,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000'
    },
    icon4: {
        left: 65,
        top: 5
    }
})

