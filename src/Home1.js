import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight, Modal, FlatList, ImageBackground, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
// import { subject } from "../utils/Data";
// import { classVideos } from "../utils/thumbnail";
// import { target } from "../utils/classes";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            isClassVisible: false,
            selectedClass: ""
        }
    }

    pickClass = () => {
        this.setState((options) => ({
            isClassVisible: !options.isClassVisible
        }))
    }

    selectClass = (classLevel) => {
        this.setState({
            selectedClass: classLevel,
            isClassVisible: false
        })
    }

    // renderSubject = ({ item }) => {
    //     return (
    //         // <View style={{ flex: 1 }}>

    //             <View style={styles.smallContainer}>

    //                 <TouchableHighlight style={styles.button}
    //                     underlayColor='transparent'
    //                     onPress={() => {
    //                         if (item.name === 'Mathematics') {
    //                             this.props.navigation.navigate('Maths')
    //                         }
    //                     }}>
    //                     <Text style={styles.font1}>{item.name}</Text>
    //                 </TouchableHighlight>
    //                 <View style={styles.iconContainer}>
    //                     <Icon name="radio-button-checked" size={24} color='#00ff00' />
    //                 </View>
    //             </View>
    //         // </View>
    //     );
    // };

    // renderThumbnail = ({ item }) => {

    //     return (
    //         <View style={styles.secondContainer}>
    //             <View style={styles.renderContainer}>
    //                 <Image style={styles.thumbnail}
    //                     source={{ uri: item.imgUrl }}>
    //                 </Image>
    //                 <View style={styles.bookItemMetaContainer}>
    //                     <Text style={styles.textTitle} numberOfLines={1}>
    //                         {item.name}
    //                     </Text>
    //                 </View>
    //             </View>
    //         </View>
    //     )
    // }

    // renderClasses = ({ item }) => {
    //     return (
    //         <View style={styles.renderImage}>
    //             <View style={styles.classesContainer}>

    //                 <ImageBackground style={styles.classesImage}
    //                     source={{ uri: item.imgUrl }}>
    //                     <View style={styles.profileIcon}>
    //                     </View>
    //                     <Text style= {styles.text5}>{item.name}</Text>
    //                     <Text style = {styles.text6} numberOfLines={4}>{item.name1}</Text>
    //                     <TouchableHighlight style = {styles.button1}>
    //                         <Text style = {styles.buttonText}>Book a free class</Text>
    //                     </TouchableHighlight>
    //                 </ImageBackground>



    //             </View>
    //         </View>
    //     )
    // }
    
    

    render() {
        const { isClassVisible, selectedClass } = this.state;
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerTwo}>
                    <Image style={styles.imageView}
                        source={require('../../assets/inmakes1.png')}>
                    </Image>
                </View>
                <View style={styles.secondContainer}>
                    <Text style={styles.textView1}>Good Morning</Text>
                    <Text style={styles.textView2}>Mohammed Rinshad</Text>
                </View>
                <TouchableHighlight style={styles.classContainer}
                    onPress={this.pickClass}>
                    <View>
                        <Icon style = {styles.icon1}
                        name="expand-more" size={24} color= '#fff'/>
                        <Text style={styles.text1}>Class</Text>
                        <View>
                            <Text style={styles.text2}>
                                {selectedClass ? selectedClass : 'Select Class'}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <Modal
                    visible={isClassVisible}
                    animationType="slide"
                    transparent={true}>
                    <View style={styles.modalContainer}>
                        {classOptions.map((classLevel) => (
                            <TouchableHighlight
                                key={classLevel}
                                style={styles.modalItem}
                                underlayColor='#001133'
                                onPress={() => this.selectClass(classLevel)}>
                                <Text style={styles.modalText}>{classLevel}</Text>
                            </TouchableHighlight>
                        ))}
                    </View>
                </Modal>


                {/* <View> */}
                {/* <View style = {styles.rowContainer}> */}
                {/* <FlatList
                    data={subject}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderSubject}>
                </FlatList> */}

                {/* <View style = {styles.smallContainer1}> */}
                {/* <View> */}
                {/* <Text style={styles.text4}> Recent course</Text> */}
                {/* </View> */}
                <FlatList
                    data={classVideos}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderThumbnail}>

                </FlatList>
                {/* </View> */}
                <FlatList
                    data={target}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderClasses}>

                </FlatList>



                {/* </View> */}
                {/* </View> */}
                </View>

            </ScrollView>
        )
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
    containerTwo: {
        height: '5%',
        width: '100%',
        // color: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageView: {
        height: 40,
        width: '40%',
        right: 50,
        marginTop: 20
    },
    secondContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        width: '100%',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
        // top: 5,
        // left: 25
    },
    textView1: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        textAlign: 'left',
        left: 25,
        top: 40
    },
    textView2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
        left: 25,
        top: 30
    },
    classContainer: {
        height: '8%',
        width: '85%',
        backgroundColor: '#001133',
        // alignItems: 'center',
        // justifyContent: 'center',
        // bottom: 40,
        left: 25,
        borderRadius: 8,
        top: 120
    },
    text1: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        letterSpacing: 1,
        left: 30,
        bottom: 5
    },
    text2: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        left: 30,
        bottom: 5
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
    // smallContainer: {
    //     flexDirection: 'row',
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    //     flex: 1,
    //     bottom: 20
    // },
    // button: {
    //     height: 50,
    //     width: 135,
    //     backgroundColor: '#fff',
    //     left: 35,
    //     borderRadius: 8,
    //     borderWidth: 2,
    //     borderColor: '#000',
    //     marginTop: 10,
    //     // marginLeft: 10,
    //     top: 40
    // },
    // font1: {
    //     fontSize: 16,
    //     top: 8,
    //     color: '#000',
    //     textAlign: 'left',
    //     left: 32
    // },
    // rowContainer: {
    //     flexDirection: 'row'
    // },
    // iconContainer: {
    //     marginLeft: -10,
    //     top: 60,
    //     right: 80
    // },
    // text3: {
    //     fontSize: 16,
    //     fontWeight: '400',
    //     color: '#fff'
    //     // bottom: 50
    // },
    // // smallContainer1: {
    // //     height: '25%',
    // //     width: '100%',
    // //     flexDirection: 'row',
    // //     justifyContent: 'space-between',
    // //     bottom: 190
    // // },
    // thumbnail: {
    //     height: 165,
    //     width: 270,
    //     // bottom: 100,
    //     // marginBottom: 75,
    //     // marginTop: 20,
    //     marginRight: -15,
    //     left: 40,
    //     // bottom: 50

    // },
    // bookItemMetaContainer: {
    //     padding: 5,
    //     paddingLeft: 10
    // },
    // textTitle: {
    //     fontSize: 22,
    //     fontWeight: '600',
    //     // bottom: 170,
    //     color: '#000',
    //     // bottom: 15
        
    // },
    // renderContainer: {
    //     height: '10%',
    //     // width: '100%',
    //     // bottom: 55
    //     // alignItems: "center",
    //     // flex: 1,
    //     // marginRight: 105,
    //     // left: 35,
    //     flexDirection: 'row',
    //     // marginBottom: 200
    //     // bottom: 50
    //     marginRight: -50
    // },
    // text4: {
    //     fontSize: 16,
    //     fontWeight: '700',
    //     color: '#000',
    //     // marginBottom: 100,
    //     left: 35,
    //     // marginBottom: 10,
    //     letterSpacing: 1,
    //     // top: 10
    //     bottom: 10
    // },
    // renderImage: {
    //     flex: 1
    // },
    // secondContainer: {
    //     flex: 1
    // },
    // classesContainer: {
    //     height: '20%',
    //     flexDirection: 'row',

    // },
    // classesImage: {
    //     height: 600,
    //     width: 320,
    //     marginRight: 30,
    //     left: 35,
        
    // },
    // profileIcon: {
    //     height: 80,
    //     width: 80,
    //     borderRadius: 50,
    //     backgroundColor: 'gray',
    //     left: 25,
    //     top: 10
    // },
    // text5: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     color: '#fff',
    //     left: 20,
    //     top: 15
    // },
    // text6: {
    //         fontSize: 16,
    //         fontWeight: 'bold',
    //         color: 'gray',
    //         left: 15,
    //         top: 30
    // },
    // button1: {
    //     width: 130,
    //     height: 50,
    //     backgroundColor: '#00ff00',
    //     top: 70,
    //     left: 90,
    //     borderWidth: 2,
    //     borderColor: '#000',
    //     borderRadius: 4,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // buttonText: {
    //     fontSize: 14,
    //     fontWeight: 'bold',
    //     color: '#fff'
    // },
    // 
})