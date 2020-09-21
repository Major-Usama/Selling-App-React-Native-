import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from './AppText'
import Icon from './Icon'

export default function CategoryPickerItem({item,onPress}) {
    return (

        <View style={styles.container}>

                <Icon backgroundColor={item.backgroundColor} name={item.icon} size={55}/>
              <AppText style={styles.label}>{item.label}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({

    container:
    {
        paddingHorizontal:27,
        paddingVertical:20,
        alignItems:'center',
        width:'33%'

    },

    label:
    {
        marginTop:5,
        textAlign:'center'
    }
})
