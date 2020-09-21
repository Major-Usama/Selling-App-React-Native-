import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


import defaultStyles from '../config/styles'

export default function AppTextInput({ icon,width="100%", ...otherprops }) {
    return (
        <View style={[styles.conatainer,{width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}

                style={defaultStyles.text} {...otherprops} />



        </View>
    )
}

const styles = StyleSheet.create({

    conatainer:
    {
        backgroundColor: defaultStyles.colors.light,
        flexDirection: 'row',
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,
    
        alignItems: 'center'

    },

    icon:
    {
        marginRight: 10,
    },


})
