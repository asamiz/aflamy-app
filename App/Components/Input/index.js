import React from 'react'
import { TextInput } from 'react-native'
import Styles from './styles'
import { Colors } from '../../Constants'

export const Input = ({ placeholder, onChangeText }) => {
    let textInputRef = ''
    const _onChangeText = text => {
        textInputRef.setNativeProps({ text })
        onChangeText(text)
    }
    return (
        <TextInput
            onChangeText={(text) => _onChangeText(text)}
            style={Styles.container}
            selectionColor={Colors.orange}
            placeholderTextColor={Colors.darkGrey}
            placeholder={placeholder}
            ref={ref => textInputRef = ref}
        />
    )
}