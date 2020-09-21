import React from 'react'
import { StyleSheet, Text, View, Image,TouchableHighlight } from 'react-native'


import AppText from './AppText'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons} from '@expo/vector-icons';
 


export default function ListItem({ image, IconComponent, title, subTitle,onPress,renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.light}
        >
        <View style={styles.container}>
            {IconComponent}
           {image && <Image source={image} style={styles.image} />}

            <View style={styles.detailsContainer}>
    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                { subTitle &&<AppText style={styles.subTitle} numberOfLines={1}>{subTitle}</AppText>}
            </View>

            <MaterialCommunityIcons name="chevron-right" size={20} color={colors.medium}/>

        </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({

    container:
    {
        flexDirection: 'row',
        padding:12,
        backgroundColor:colors.white,
        alignItems:'center'
    },

    image:
    {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,

    },

    detailsContainer:
    {
        marginLeft:10,
        justifyContent:'center',
        flex:1,
        
        
    
    },

    title:
    {
        fontWeight: 'bold',

    },

    subTitle:
    {
        color: colors.medium,
        opacity: 0.5,
        fontSize:14
    }

})
