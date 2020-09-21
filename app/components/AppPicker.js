import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'


export default function AppPicker({

    icon,
    numberOfColumns,
    items,
    width = "100%",
    onSelectedItem,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem
}) {

    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.conatainer, { width }]}>
                    {icon && <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon} />}


                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}


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
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>


                    <FlatList

                        data={items}
                        numColumns={numberOfColumns}
                        keyExtractor={(item) => item.value.toString}
                        renderItem={({ item }) =>
                            <PickerItemComponent
                                label={item.label}
                                item={item}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectedItem(item);
                                }

                                }
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
        backgroundColor: defaultStyles.colors.light,
        flexDirection: 'row',
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,

        alignItems: 'center'

    },

    icon:
    {
        marginRight: 10,
    },


    placeholder:
    {
        color: defaultStyles.colors.medium,
        flex: 1

    },
    text:
    {

        flex: 1,
    },

    modalButton:
    {
        width: '100%',
        alignItems: 'center',


    },




})
