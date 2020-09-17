import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'


import Screen from '../components/Screen'
import Card from '../components/Card'

import colors from '../config/colors'

const listings =[

{

    id:1,
    title:'Red Jacket for sale',
    price:100,
    image:require('../assets/Jacket.jpg')
},

{

    id:2,
    title:'Couch in great condition',
    price:100,
    image:require('../assets/cauch1.jpg')
}

]

export default function ListingsScreen() {
    return (
       
        <Screen style={styles.screen}>

            <FlatList 
            data={listings}
            keyExtractor={listing=>listing.id.toString}
            renderItem={({item})=>
                    <Card 
                    title={item.title}
                    subTitle={"$"+item.price}
                    image={item.image}
                    
                    />
        
        }
            
            />
                  

        </Screen>
    )
}

const styles = StyleSheet.create({

screen:

{
    width:'100%',
    height:'100%',
    backgroundColor:colors.light,
    padding:20,

}

})
