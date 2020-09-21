import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,Platform } from 'react-native'

import Constants from 'expo-constants'

export default function Screen({children,style}) {
    return (
        <SafeAreaView style={[styles.screen,style]}>
            <View style={[styles.view,style]}>

            {children}
            </View>
          
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    screen:
    {
        paddingTop:Constants.statusBarHeight,

        flex:Platform.OS==='ios'? 1 : 0, 
        
    },

    view:
    {
         //  flex:1,
        
        
    }




})
