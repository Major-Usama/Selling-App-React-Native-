import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from '../config/colors'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
      <MaterialCommunityIcons name="close" size={35} color="white" />
         </View>

      <View style={styles.deleteIcon}>
      <MaterialCommunityIcons name="trash-can-outline" size={35} color="white" />
      </View>
      <Image resizeMode='cover' source={require('../assets/chair.jpg')} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
container:
{
  
  backgroundColor:'#000',
  height:'100%'

},

closeIcon:
{
 
  position:'absolute',
  top:40,
  left:30,

},

deleteIcon:
{
 
   position:'absolute',
   top:40,
   right:30,

},

  image:
  {
     width:wp('100%'),
     height:450,
     marginVertical:120
     
  }
})
