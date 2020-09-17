import React from 'react'
import { StyleSheet, Text,  } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../config/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AppButton({title,onPress,color="primary"}) {
    return (

        <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
        
            <Text style={styles.title}>{title}</Text>
        
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({



    button:
    {
        
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        width:wp('90%'),
        borderRadius:25,
        padding:wp('4%'),
        marginVertical:wp('2%')


    },
    title:
    {
        color:colors.white,
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:18,

    }
})
