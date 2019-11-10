import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Constants'

export default StyleSheet.create({
    container: {
        borderColor: Colors.orange,
        borderWidth: 1,
        borderRadius: 8,
        width: '80%',
        padding: 10,
        color: Colors.orange,
        ...Fonts.Input
    }
})