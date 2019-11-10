import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Share } from 'react-native'
import Styles from './styles'
import { IconView } from '../../Components'

// Global Variables -- Had to use it cause api has bas url for the image
const imageBaseURL = 'http://image.tmdb.org/t/p/w500'
const dummyPhoto = 'https://sspc.sedulen.com/wp-content/uploads/2019/05/no-image.png'

export const MovieCard = ({ data, onPress, hasButton = true }) => {

    // Variables
    const { poster_path, release_date, title, vote_average } = data
    let source = imageBaseURL + poster_path

    // User Defined Functions
    const _renderCell = (title, subtitle, rating) =>
        <View style={Styles.row}>
            <Text style={Styles.title}>{title}</Text>
            {rating ?
                <View style={Styles.ratingContainer}>
                    <Text style={Styles.subtitle}>{`${rating} / 10`}</Text>
                    <IconView name={'star'} size={10} iconStyle={[Styles.icon, { marginLeft: 4 }]} />
                </View>
                : <Text style={Styles.subtitle}>{subtitle}</Text>}
        </View>

    const _handleSharePress = () => {
        Share.share({
            message: source,
            url: source,
            title: title
        }, {
            // Android only:
            dialogTitle: 'Share Movie Poster',
            // iOS only:
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ]
        })
    }

    const getYear = () => {
        return release_date.split('-').map(part => parseInt(part, 10))[0]
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.smallCol}>
                <View style={Styles.imageContainer}>
                    <Image source={{ uri: poster_path ? source : dummyPhoto }} style={Styles.image} />
                </View>
            </View>
            <View style={Styles.bigCol}>
                <View style={Styles.headerRow}>
                    <Text style={Styles.cardHeader}>{title}</Text>
                    <Text style={Styles.cardYear}>{`Year: ${getYear() || ''}`}</Text>
                </View>
                {_renderCell('Release Date:', release_date)}
                {_renderCell('IMDB Rating:', null, vote_average)}
                <View style={Styles.buttonsContainer}>
                    {hasButton &&
                        <TouchableOpacity style={[Styles.button, { marginRight: 16 }]} onPress={() => onPress()}>
                            <IconView name={'heart'} size={15} iconStyle={Styles.icon} />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity style={Styles.button} onPress={() => _handleSharePress()}>
                        <IconView name={"sharealt"} size={15} iconStyle={Styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
