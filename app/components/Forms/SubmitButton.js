import React from 'react'
import {useFormikContext} from 'formik'
import { StyleSheet, Text, View } from 'react-native'


import AppButton from '../AppButton'

export default function SubmitButton({title}) {

    const {handleSubmit}=useFormikContext()
    return (
        <View style={{alignSelf:'center'}}>
        <AppButton
            
         title={title}
            onPress={handleSubmit}
            />
            </View>
    )
}

const styles = StyleSheet.create({})
