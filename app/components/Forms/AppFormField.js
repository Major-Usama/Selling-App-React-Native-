
import React from 'react'
import { useFormikContext } from 'formik'
import { StyleSheet, Text, View } from 'react-native'


import AppTextInput from '../AppTextInput'
import ErrorMessage from '../Forms/ErrorMessage'

export default function AppFormField({name,width,...otherprops}) {

   const {setFieldTouched,handleChange,errors,touched}= useFormikContext()
    return (
        <>

          <AppTextInput
      
            onChangeText={handleChange(name)}
            {...otherprops}
            onBlur={()=>setFieldTouched(name)}
           width={width}
            />

               
                 <ErrorMessage  error={errors[name]} visible={touched[name]}/>
        </>
    )
}

const styles = StyleSheet.create({})
