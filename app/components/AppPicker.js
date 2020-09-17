import React,{useState} from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'


import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './pickerItem'


export default function AppPicker({icon,items,placeholder}) {

    const[modalVisible,setModalVisible]=useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={styles.conatainer}>
        {icon &&<MaterialCommunityIcons
        name={icon}  
        size={20}
        color={defaultStyles.colors.medium} 
        style={styles.icon} />}

        <AppText style={styles.text}>{placeholder}</AppText>  
        <MaterialCommunityIcons
        name="chevron-down"  
        size={20}
        color={defaultStyles.colors.medium} 
         />  
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide' > 
        <Screen >
            <View style={styles.modalButton}>
            <Button title="Close" onPress={()=>setModalVisible(false)}/>
            </View>


            <FlatList
            
            data={items}
            keyExtractor={item=>item.value.toString}
            renderItem={({item})=> <PickerItem
            label={item.label}
            onPress={()=>console.log(item)}
            />}
            
            />
        
        </Screen>
        
        </Modal>
        </>
        
    )
}

const styles = StyleSheet.create({

    conatainer:
    {
        backgroundColor:defaultStyles.colors.light,
        flexDirection:'row',
        borderRadius:25,
        padding:10,
        marginVertical:10,
        width:'100%',
        alignItems:'center'        

    },

    icon:
    {
        marginRight:10,
    },

    text:
    {
        
        flex:1,
    },

    modalButton:
    {
        width:'100%',
        alignItems:'center',
    
        
    },

   

    
})
