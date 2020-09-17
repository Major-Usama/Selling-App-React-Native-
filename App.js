import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TextInput, Switch, Button } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { Entypo } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MessageBubble from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import MessagesScreen from './app/screens/MessagesScreen'
import 'react-native-gesture-handler';




import colors from './app/config/colors';
import AppText from './app/components/AppText';
import ListingsDetailsScreen from './app/screens/ListingsDetailsScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';


const categories=[

{
  label:"Furniture",value:1
},

{
  label:"CLothing",value:2

},

{
  label:"Cameras",value:3

},

]

export default function App() {

  const[isNew,setisNew]=useState(false);
  
  return (

     <Screen style={styles.container}>
       
       <AppPicker  placeholder="Category" icon='apps' items={categories}/>
       <AppTextInput  placeholder="Email" icon='email'/>
       
  

       
     </Screen>


  );
}

const styles = StyleSheet.create({

  container:
  {

    backgroundColor: '#fff',
    




  },


});
