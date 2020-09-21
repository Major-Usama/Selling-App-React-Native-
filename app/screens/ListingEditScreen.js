import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem'

import {
AppForm,
AppFormField,
AppFormPicker,
SubmitButton,
}
    from '../components/Forms'
import Screen from '../components/Screen'


const validationSchema = Yup.object().shape({

    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
})

const categories = [

    {
        label: "Furniture", value: 1, backgroundColor: 'red', icon: 'floor-lamp'
    },

    {
        label: "Cars", value: 2, backgroundColor: 'darkorange', icon: 'car'
    },

    {
        label: 'Camers', value: 3, backgroundColor: 'orange', icon: 'camera-outline'
    },

    {
        label: "Games", value: 4, backgroundColor: 'lightgreen', icon: 'cards'
    },

    {
        label: "Clothing", value: 5, backgroundColor: 'turquoise', icon: 'shoe-heel'
    },

    {
        label: 'Sports', value: 6, backgroundColor: '#95CDD8', icon: 'basketball'
    },


    {
        label: "Movies & Music", value: 7, backgroundColor: '#57A0D3', icon: 'headphones'
    },

    {
        label: "Books", value: 8, backgroundColor: 'gold', icon: 'book-open-variant'
    },

    {
        label: 'Others', value: 9, backgroundColor: 'gray', icon: 'xbox-controller-view'
    }
]

export default function ListingEditScreen() {
    return (
        <Screen>

            <AppForm
                initialValues={{

                    title: "",
                    price: "",
                    description: "",
                    category: null,

                }}

                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}

            >

                <AppFormField maxLength={255} name="title" placeholder="Title" />

                <AppFormField
                    keyboardType='numeric'
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />

                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Categories"
                    width="50%"
                />

                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLine={3}
                    placeholder="Description"


                />

                <SubmitButton title="POST" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({})
