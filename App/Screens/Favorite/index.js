import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, FlatList, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Colors } from '../../Constants'
import { MovieCard } from '../../Components/'
import Styles from './styles'

export default Favorite = props => {

  // State and Variables
  const [data, setData] = useState([])
  const [isActivityShown, setIsActivityShown] = useState(false)


  // Lifecycle Hooks
  useEffect(() => {
    _navListener = props.navigation.addListener('didFocus', () => {
      AsyncStorage.getItem('userFavoriteMovies').then(res => {
        setIsActivityShown(false)
        setData(JSON.parse(res))
      })
    })
  }, [])

  // Helper Components and Functions
  const _renderItem = ({ item }) => {
    return (
      <MovieCard
        data={item}
        hasButton={false}
      />
    )
  }

  const _itemSeparator = () => {
    return <View style={{ height: 16 }} />
  }

  return (
    <View style={Styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.black} />
      <Text style={Styles.header}>{"Favorite Movies"}<Text style={Styles.twoDots}>{" :"}</Text></Text>
      <View style={Styles.seprator} />
      {isActivityShown ?
        <View style={Styles.activity}>
          <ActivityIndicator size={50} color={Colors.orange} />
        </View>
        : data ?
          <FlatList
            data={data}
            renderItem={_renderItem}
            contentContainerStyle={{ paddingVertical: 16 }}
            keyExtractor={item => item.id + ''}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={_itemSeparator}
          /> :
          <View style={Styles.body}>
            <Text style={Styles.bodyText}>{"You don't have favorite movies yet\nClick search and add some!"}</Text>
          </View>
      }
    </View>
  )
}
