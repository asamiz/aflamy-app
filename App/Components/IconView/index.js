import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export const IconView = ({ size, iconStyle, name, containerStyle }) => <View style={containerStyle}>
    <Icon style={iconStyle} size={size} name={name} />
</View>
