import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

export default function ListingsDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image}  source={require('../assets/jacket3.jpg')}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Red Jacket For Sale</AppText>
            <AppText style={styles.price}>100$</AppText>

            <View style={styles.userContainer}>
            <ListItem  
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamdani"
            subTitle="5 Listings"
            />


            </View>

            </View>
         
        </View>
    )
}

const styles = StyleSheet.create({

    image:
    {
        width:'100%',
        height:250,
    },

    detailsContainer:
    {
            padding:20,
    },

    title:
    {
        fontSize:22,
        fontWeight:'bold'

    },

    price:
    {
        fontWeight:'bold',
        color:colors.secondry,
        fontSize:20,
        marginVertical:10,

    },
    userContainer:
    {
        marginVertical:40,
    }





})
