import { Platform } from 'react-native'


export const Fonts = {
    h1: {
        fontSize: 30,
        lineHeight: 48,
        fontFamily: Platform.OS == 'android' ? 'Overpass-Light' : 'Overpass_Light'
    },
    h2: {
        fontSize: 26,
        lineHeight: 30,
        fontFamily: Platform.OS == 'android' ? 'Overpass-Light' : 'Overpass_Light'
    },
    s1: {
        fontSize: 16,
        lineHeight: 30,
        fontFamily: Platform.OS == 'android' ? 'Overpass-Bold' : 'Overpass_Bold'
    },
    s2: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: Platform.OS == 'android' ? 'Overpass-Light' : 'Overpass_Light'
    },
    s4: {
        fontSize: 11,
        lineHeight: 16,
        fontFamily: Platform.OS == 'android' ? 'Overpass-Bold' : 'Overpass_Bold'
    },
    s3i: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: Platform.OS == 'android' ? 'Overpass-Italic' : 'Overpass_Italic'
    },
    s4i: {
        fontSize: 11,
        lineHeight: 16,
        fontFamily: Platform.OS == 'android' ? 'Overpass-Italic' : 'Overpass_Italic'
    },
    button: {
        fontSize: 12,
        lineHeight: 20,
        fontFamily: Platform.OS == 'android' ? 'Overpass-Bold' : 'Overpass_Bold'
    },
    Input: {
        fontSize: 16,
        lineHeight: 25,
        fontFamily: Platform.OS == 'android' ? 'Overpass-Bold' : 'Overpass_Bold'
    }
}
