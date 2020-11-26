
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,StatusBar, ImageBackground, SafeAreaView, Image, TextInput, Switch, Button } from 'react-native';
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
import { set } from 'react-native-reanimated';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import * as ImagePicker from 'expo-image-picker'
import { FontAwesome } from '@expo/vector-icons'
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';




export default function App() {
     
  return (

    <View style={{padding:10}}>
   <ListingEditScreen />
   </View>


  );
}

const styles = StyleSheet.create({



});
