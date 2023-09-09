import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import Login from "./src/Login";
import Register from "./src/Register";
import OTP from "./src/OTP";
import Studentdetails from "./src/Student details";
import Schoolboard from "./src/School board";
import Pageone from "./src/Page one";
import Pagetwo from "./src/Page two";
import Pagethree from "./src/Page three";
import Pagefour from "./src/Page four";
import Pagefive from "./src/Page five";
import Home from "./src/Bottom Tab/Home";
import Recent from "./src/Bottom Tab/Recent";
import Exams from "./src/Bottom Tab/Exams";
import Profile from "./src/Bottom Tab/Profile";
import Contact from "./src/Bottom Tab/Contact";

import DrawerContent from "./src/Drawer/DrawerContent";
import ExamCorner from "./src/Drawer/Exam Corner";
import Subscriptions from "./src/Drawer/Subscriptions";
import Analytics from "./src/Drawer/Analytics";
import Downloads from "./src/Drawer/Downloads";
import Notifications from "./src/Drawer/Notifications";
import Referrals from "./src/Drawer/Referrals";
import Shareapp from "./src/Drawer/Share app";
import Logout from "./src/Drawer/Logout";
import Enquirenow from "./src/Drawer/Enquire now";

import Videos from "./src/Tab/Videos";
import Resources from "./src/Tab/Resources";
import ChapterText from "./src/Tab/Chapter Text";
import QNBank from "./src/Tab/QN Bank";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import MathsScreen from "./src/Maths Screen";
import Maths from "./src/Maths";
import Mathematics from "./src/Mathematics";


const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()
const Tab = createMaterialTopTabNavigator()
const StackMaths = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="OTP"
        component={OTP}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Student details"
        component={Studentdetails}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="School board"
        component={Schoolboard}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Page one"
        component={Pageone}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Page two"
        component={Pagetwo}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Page three"
        component={Pagethree}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Page four"
        component={Pagefour}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Page five"
        component={Pagefive}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="BottomTab"
        component={MyBottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="Drawer"
      component={MyDrawer}
      options={{
        headerShown: false
      }}/>
      <Stack.Screen
      name="Tab"
      component={MyTab}
      options={{
        headerShown: false
      }}/>
       <Stack.Screen
      name="Maths Screen"
      component={MathsScreen}
      options={{
        headerShown: false
      }}/>
      <Stack.Screen
      name="Maths"
      component={Maths}
      options={{
        headerShown: false
      }}/>
      <Stack.Screen
      name="Mathematics"
      component={Mathematics}
      options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
  )
}

function MyDrawer() {
  return(
    <Drawer.Navigator
    drawerContent={(props)=> <DrawerContent{...props}/>}>
      <Drawer.Screen
      name="Home"
      component={MyBottomTab}
      options={{
        headerShown: false
      }}/>
      <Drawer.Screen
      name = "Exam Corner"
      component={ExamCorner}/>
      <Drawer.Screen
      name="Subscriptions"
      component={Subscriptions}/>
      <Drawer.Screen
      name="Analytics"
      component={Analytics}/>
      <Drawer.Screen
      name="Downloads"
      component={Downloads}/>
      <Drawer.Screen
      name="Notifications"
      component={Notifications}/>
      <Drawer.Screen
      name="Referrals"
      component={Referrals}/>
      <Drawer.Screen
      name="Share app"
      component={Shareapp}/>
      <Drawer.Screen
      name="Logout"
      component={Logout}/>
      <Drawer.Screen
      name="Enquire now"
      component={Enquirenow}/>
    </Drawer.Navigator>
  )
}





function MyBottomTab() {
  return (
    <BottomTab.Navigator
    screenOptions={{
      tabBarStyle: {
        marginRight: 25,
        marginLeft: 25,
        marginBottom: 15,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#00ff00',
        backgroundColor:'white',position:'absolute',height:70,
        marginTop:10
      },
    }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#00ff00',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) => 
          focused ? <Icon name = 'house' size = {40} color= '#00ff00'/> : <Icon name = 'house' size = {24} color = 'gray'/>
        }}
      />
      <BottomTab.Screen
        name="Recent"
        component={Recent}
        options={{
          tabBarActiveTintColor: '#00ff00',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) =>
          focused ? <Icon name = 'play-arrow' size= {40} color = '#00ff00'/> : <Icon name = 'play-arrow' size = {24} color = 'gray'/>
        }}
      />
      <BottomTab.Screen
        name="Exams"
        component={Exams}
        options={{
          tabBarActiveTintColor: '#00ff00',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) =>
          focused ? <Icon name = 'feed' size= {40} color = '#00ff00'/> : <Icon name = 'feed' size = {24} color = 'gray'/>
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: 'center',
          headerShown: false,
            tabBarActiveTintColor: '#00ff00',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({focused}) =>
           focused ? <Icon name = 'person' size= {40} color = '#00ff00'/> : <Icon name = 'person' size = {24} color = 'gray'/>
        }}
      />
      <BottomTab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarActiveTintColor: '#00ff00',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) =>
          focused ? <Icon name = 'mail' size= {40} color = '#00ff00'/> : <Icon name = 'mail' size = {24} color = 'gray'/>
        }}
      />
    </BottomTab.Navigator>
  )
}

// function Maths(){
//   return(
//     <StackMaths.Navigator>
//       <StackMaths.Screen
//       name = 'Maths Screen'
//       component = {MathsScreen}
//       options= {{
//         headerShown: false
//       }}/>
//     </StackMaths.Navigator>
//   )
// }



function MyTab(){

return( 
  <View style = {styles.container}>
  <MathsScreen/>
  
<Tab.Navigator
screenOptions={{
  tabBarLabelStyle: {fontSize: 13},
  tabBarItemStyle: {width: 100},
  tabBarStyle: {backgroundColor: '#fff'}
}}>

  <Tab.Screen 
 name="Videos"
 component={Videos}
 options={{
  tabBarActiveTintColor: '#00ff00',
  tabBarInactiveTintColor: 'gray'
 }}/>
 <Tab.Screen
 name="Chapter Text"
 component={ChapterText}
 options={{
  tabBarActiveTintColor: '#00ff00',
  tabBarInactiveTintColor: 'gray'
 }}/>
 <Tab.Screen
 name="Resources"
 component={Resources}
 options={{
  tabBarActiveTintColor: '#00ff00',
  tabBarInactiveTintColor: 'gray'
 }}/>
 <Tab.Screen
 name="QN Bank"
 component={QNBank}
 options={{
  tabBarActiveTintColor: '#00ff00',
  tabBarInactiveTintColor: 'gray'
 }}/>
</Tab.Navigator>

</View>
)
}

const styles = StyleSheet.create({
  container: {
   flex: 1
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  imageView: {
    width: 200,
    height: 100,
    marginBottom: 20
  }
})

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}