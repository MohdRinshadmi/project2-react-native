import React, { Component } from "react";
import { ScrollView, View, StyleSheet, ImageBackground, Image, Text, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Profile extends Component {
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <ImageBackground style = {styles.backgroundView}
                 source={require('../../assets/eleven.jpg')}>
                    <View style = {styles.smallContainer}>
                        <View style = {styles.profileContainer}>
                        <View style = {styles.profileIcon}>
                            <Image style = {styles.iconView}
                            source={require('../../assets/deer2.jpg')}>
                            </Image>
                            </View>
                        <Text style = {styles.font1}>Mohammed Rinshad</Text>
                        <Text style = {styles.font2}>ID: 1234</Text>
                        </View>
                        <Text style = {styles.font3}>Personal Info</Text>
                        <View style = {styles.seperation}/>
                        <View style = {styles.nameContainer}>
                            <Text style = {styles.font4}>Account Settings</Text>
                            <Text style = {styles.nameText}>Mohammed Rinshad</Text>
                        </View>
                        <View style = {styles.seperation}/>
                        <View style = {styles.nameContainer}>
                            <Text style = {styles.font4}>Email</Text>
                            <Text style = {styles.nameEmail}>rinshad803@gmail.com</Text>
                        </View>
                        <View style = {styles.seperation}/>
                        <View style = {styles.courseContainer}>
                            <Text style = {styles.courseText}>Course Info</Text>
                        </View>
                        <View style = {styles.seperation}/>
                        <View style = {styles.nameContainer}>
                            <Text style = {styles.font4}>Course Info</Text>
                            <Text style = {styles.nameInfo}>Inmakes edu</Text>
                        </View>
                        <View style = {styles.seperation}/>
                        <View style = {styles.nameContainer}>
                            <Text style = {styles.font4}>Course</Text>
                            <Text style = {styles.nameCourse}>Plus Two Science</Text>
                        </View>
                        <View style = {styles.seperation}/>
                        <View style = {styles.nameContainer}>
                            <Text style = {styles.font4}>Payment Status</Text>
                            <Text style = {styles.namePayment}>Free</Text>
                        </View>
                        <View style = {styles.seperation}/>
                        <View style = {styles.nameContainer}>
                            <Text style = {styles.font4}>Expiry Date</Text>
                            <Text style = {styles.nameExpiry}>Not Applicable</Text>
                        </View>
                        <View style = {styles.seperation}/>
                    </View>

                    <TouchableHighlight style = {styles.button}>
                    <View style = {styles.iconContainer}>
                        <Text style = {styles.buttonText}>Custom Payment</Text>
                        <Icon style = {styles.alignIcon}
                        name="payments" size={24} color= "#fff"/>
                         </View>
                    </TouchableHighlight>
                    <TouchableHighlight style = {styles.button}>
                        <View style = {styles.iconContainer}>
                        <Text style = {styles.buttonReferal}>Referals</Text>
                        <Icon style = {styles.alignIcon1}
                        name="task" size={24} color= '#fff'/>
                        </View>
                    </TouchableHighlight>
                </ImageBackground>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    backgroundView: {
        height: '100%',
        width: '100%'
    },
    smallContainer: {
        height: '75%',
        width: '90%',
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginLeft: 20,
        marginTop: 70,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderWidth: 1,
        borderColor: '#00ff00'
    },
    profileContainer: {
        height: '18%',
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    profileIcon: {
        height: 80,
        width: 80,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 10
    },
    iconView: {
        height: '100%',
        width: '100%',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#00ff00'
    },
    font1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
        marginLeft: 10
    },
    font2: {
        fontSize: 14,
        color: 'gray',
        marginTop: 35,
        right: 168
    },
    font3: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 15,
        color: '#000'
    },
    seperation: {
        borderBottomWidth: .5,
        borderBottomColor: 'gray',
        marginTop: 20
    },
    font4: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        marginLeft: 10,
        color: '#000'
        // textAlign: 'center'
    },
    nameContainer: {
        height: '6%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 45,
        color: '#000'
    },
    nameEmail: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 105,
        color: '#000'
    },
    courseContainer: {
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    courseText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        // textAlign: 'center'
        marginTop: 10
    },
    nameCourse: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 135,
        color: '#000'
    },
    namePayment: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 165,
        color: '#000'
    },
    nameExpiry: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 125,
        color: '#000'
    },
    nameInfo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 135,
        color: '#000'
    },
    button: {
        width: '90%',
        height: 45,
        borderRadius: 8,
        backgroundColor: '#00ff00',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginLeft: 20,
        borderWidth: 2,
        borderColor: '#000'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        right: 40
    },
    iconContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    alignIcon: {
        // textAlign: 'left',
        right: 200,
        // marginBottom: 20
    },
    buttonReferal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        right: 70
    },
    alignIcon1: {
        // textAlign: 'left',
        right: 170,
        // marginBottom: 20
    }
})