import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Constants'

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white
    },
    header: {
        ...Fonts.h1
    }
})