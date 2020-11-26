import React from 'react'
import ImageInput from '../ImageInput'
import ErrorMessage from './ErrorMessage'
import {useFormikContext} from 'formik' 
import ImageInputList from '../ImageInputList';

export default function FormImagePicker({name}) {
   
    const { errors,setFieldValue,touched,values } = useFormikContext();
    const imageUris=values[name]

    const handleAdd =(uri) => {
        setFieldValue(name,[...imageUris,uri])
      
        }
      
        const handleRemove =(uri) =>
        {
          setFieldValue(name,imageUris.filter(imageUri=>imageUri !== uri));
        }
   
    return (  

         <>
        <ImageInputList 
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
        />
       <ErrorMessage  error={errors[name]} visible={touched[name]}/>
    
        </>
    )
}


