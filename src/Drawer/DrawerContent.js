import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class DrawerContent extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.profileContainer}>
                    <View style = {styles.profilIcon}>
                        <Image style = {styles.imageView}
                        source={require('../../assets/deer2.jpg')}>
                        </Image>
                    </View>
                    <View style = {styles.infoText}>
                        <Text style = {styles.iconText}>Mohammed Rinshad</Text>
                        <Text style = {styles.iconText1}>ID:1234</Text>
                    </View> 
                </View>
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Exam Corner')}>
                    <View style={styles.menuIcon}>
                        <Icon name="check-box-outline-blank" size={40} color="#00ff00" />
                    </View>
                    <Text style={styles.menuText}>Exam Corner</Text>
                </TouchableOpacity>
                <View style = {styles.seperation}/>
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Subscriptions')}>
                    <View style={styles.menuIcon}>
                        <Icon name="check-box-outline-blank" size={40} color="#00ff00" />
                    </View>
                    <Text style={styles.menuText}>Subscriptions</Text>
                </TouchableOpacity>
                <View style = {styles.seperation}/>
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Analytics')}>
                    <View style={styles.menuIcon}>
                        <Icon name="check-box-outline-blank" size={40} color="#00ff00" />
                    </View>
                    <Text style={styles.menuText}>Analytics</Text>
                </TouchableOpacity>
                <View style = {styles.seperation}/>
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Downloads')}>
                    <View style={styles.menuIcon}>
                        <Icon name="check-box-outline-blank" size={40} color="#00ff00" />
                    </View>
                    <Text style={styles.menuText}>Downloads</Text>
                </TouchableOpacity>
                <View style = {styles.seperation}/>
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Notifications')}>
                    <View style={styles.menuIcon}>
                        <Icon name="check-box-outline-blank" size={40} color="#00ff00" />
                    </View>
                    <Text style={styles.menuText}>Notifications</Text>
                </TouchableOpacity>
                <View style = {styles.seperation}/>
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Referrals')}>
                    <View style={styles.menuIcon}>
                        <Icon name="check-box-outline-blank" size={40} color="#00ff00" />
                    </View>
                    <Text style={styles.menuText}>Referals</Text>
                </TouchableOpacity>
                <View style = {styles.seperation}/>
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Share app')}>
                    <View style={styles.menuIcon}>
                        <Icon name="check-box-outline-blank" size={40} color="#00ff00" />
                    </View>
                    <Text style={styles.menuText}>Share app</Text>
                </TouchableOpacity>
                <View style = {styles.seperation}/>
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Logout')}>
                    <View style={styles.menuIcon}>
                        <Icon name="check-box-outline-blank" size={40} color="#00ff00" />
                    </View>
                    <Text style={styles.menuText1}>Logout</Text>
                </TouchableOpacity>
                <View style = {styles.seperation}/>
                <TouchableHighlight style = {styles.button}
                underlayColor= '#fff'
                onPress={() => this.props.navigation.navigate('Enquire now')}>
                    <Text style = {styles.buttonText}>Enquire now</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001133',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    profileContainer: {
        height: '20%',
        width: '100%',
        backgroundColor: '#001133',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilIcon: {
        height: 100,
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 10
    },
    imageView: {
        height: '100%',
        width: '100%',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#00ff00'
    },
    infoText: {
        color: '#fff',
        marginLeft: 10
    },
    iconText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    iconText1: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 5
    },
    menu: {
        fontSize: 16,
        marginTop: 12,
        marginLeft: 10,
        color: '#fff',
        fontWeight: '600',
        justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row',
        // textAlign: 'left',
        letterSpacing: 1
    },
    seperation: {
        borderBottomWidth: 1,
        borderBottomColor: '#111',
        marginTop: 5
    },
    // menu1: {
    //     fontSize: 16,
    //     marginTop: 12,
    //     marginLeft: 10,
    //     color: 'red',
    //     fontWeight: 'bold',
    //     justifyContent: 'center',
    //     // textAlign: 'center'
    //     letterSpacing: 1
    // },
    button: {
        width: '90%',
        height: 55,
        backgroundColor: '#001133',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#00ff00',
        marginTop: 30,
        marginLeft: 10
    },
    buttonText: {
        fontSize: 16,
        color: '#00ff00',
        fontWeight: 'bold',
        letterSpacing: 2
    },
    iconStyle: {
        // top: 25,
        marginLeft: 10,
        marginHorizontal: 15
    },
    menuIcon: {
        marginLeft: 10,
        marginRight: 15,
    },
    menuText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        flex: 1,
        textAlign: 'left',
        top:7,
        letterSpacing: 1
        // right: 30
    },
    menuText1: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'left',
        top:7,
        letterSpacing: 2
        // right: 30
    }
})