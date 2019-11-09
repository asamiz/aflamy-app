import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Constants/'

export default StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 2,
        height: 250
    }
})