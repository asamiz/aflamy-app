import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        paddingHorizontal: 12,
    },
    header: {
        ...Fonts.h1,
        color: Colors.white
    },
    seprator: {
        borderBottomColor: Colors.orange,
        borderWidth: StyleSheet.hairlineWidth,
        width: '75%',
        marginBottom: 8
    },
    activity: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    twoDots: {
        ...Fonts.h1,
        color: Colors.orange
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyText: {
        ...Fonts.h2,
        color: Colors.lightGrey,
        opacity: 0.5,
        textAlign: 'center'
    },
})