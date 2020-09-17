import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppButton from '../components/AppButton';
import { color } from 'react-native-reanimated';
import colors from '../config/colors';
export default function WelcomeScreen() {
    return (
        <View>
            

            <ImageBackground 
            blurRadius={2}
            style={styles.background}
            source={require("../assets/background.jpg")}>
                <View style={styles.logoContainer}>

                <Image
            style={styles.logo}
            source={require('../assets/logo.jpg')}/>
            <Text style={styles.tagLine}>Sell What you don't need</Text>
                </View>

          <View style={styles.buttonContainer}>
          <AppButton  title="Login"/>
            <AppButton title="Register" color="secondry"/>
          </View>
            

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    background:{

        width:'100%',
        height:'100%',
        justifyContent:'flex-end',
        alignItems:'center'
        
    },

    logoContainer:
    {
        position:'absolute',
        top:70,
        alignItems:'center'
         
    },
    logo:
    {
        width:100,
        height:100,
        borderRadius:100,

    },
    tagLine:
    {
        fontSize:wp('5%'),
        marginVertical:hp('2%'),
        fontWeight:'bold',
        fontStyle:'italic'

    },
  
    buttonContainer:
    {
    padding:20,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    
         
    },

    

 
    
})
