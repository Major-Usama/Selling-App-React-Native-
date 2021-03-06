
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


import * as Yup from 'yup'


import Screen from '../components/Screen'
import {AppForm,AppFormField,SubmitButton} from '../components/Forms'


 

const validationSchema = Yup.object().shape({

    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(5).label('Password')
})

export default function LoginScreen() {

    
    return (
        <Screen>

            <Image 
            style={styles.logo}
            source={require('../assets/logo-red.png')}/>

            <AppForm
            initialValues={{email:'',password:''}}
            onSubmit={value=>console.log(value)}
            validationSchema={validationSchema}
            >  
            
            <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
            />

               
               

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            keyboardType="number"
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
           
            />
           <SubmitButton title="Login"/>
            

            
            
            </AppForm>
          
        </Screen>
    )
}

const styles = StyleSheet.create({

logo:
{
    width:80,
    height:80,
    alignSelf:'center',
    marginTop:40,
    marginBottom:25,


}

})
