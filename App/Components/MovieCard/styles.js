import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Constants/'

export default StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: Colors.darkGrey,
        flexWrap: 'wrap',
        height: 250,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
    },
    smallCol: {
        flex: 1 / 2,
    },
    bigCol: {
        flex: 1 / 2,
        paddingVertical: 8
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageContainer: {
        height: '100%',
        width: 160
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 160,
        height: '100%'
    },
    rating: {
        marginLeft: 8,
        marginTop: 2
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        marginTop: 12,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.orange
    },
    icon: {
        color: Colors.orange,
    },
    cardHeader: {
        ...Fonts.s1,
        color: Colors.white
    },
    cardYear: {
        ...Fonts.s3,
        color: Colors.white,
    },
    cardRating: {
        ...Fonts.s2
    },
    title: {
        ...Fonts.s4,
        color: Colors.white
    },
    subtitle: {
        ...Fonts.s4i,
        color: Colors.white,
        marginLeft: 8
    },
    buttonLabel: {
        ...Fonts.button,
        color: Colors.orange
    }
})