import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../config/colors'

const menuItems=[

{
       title:"My Listings",
       icon: 
       {
           name:'format-list-bulleted',
           backgroundColor:colors.primary

       }

},

{
    title:"My Messages",
    icon: 
    {
        name:'email',
        backgroundColor:colors.secondry 

    }

}

]
export default function AccountScreen() {
    return (
        
        
        <Screen style={styles.screen} >
<View style={styles.container}>
            <ListItem
            title="Mosh Hamedani"
            subTitle="programmingwithmosh@gmail.com"
            image={require('../assets/mosh.jpg')}
            />
    </View>

    <View style={styles.container}>
        <FlatList
        data={menuItems}
        keyExtractor={menuItem=>menuItem.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({item})=>
        <ListItem
        title={item.title}
        IconComponent={
           
            <Icon  name={item.icon.name} backgroundColor={item.icon.backgroundColor} size={40}/>

        }
        />
    }
        
        />

    </View>

<View>

    <ListItem 
    
    title="Logout"
    IconComponent={
  
        <Icon name="logout" backgroundColor="#ffe66d" size={40}/>

    }
    />
</View>
               
        </Screen>
             
      


    )
}

const styles = StyleSheet.create({

screen:

{
    
    backgroundColor:colors.light,
    width:'100%',
    height:'100%'
},

container:
{
    marginVertical:20
}

})
