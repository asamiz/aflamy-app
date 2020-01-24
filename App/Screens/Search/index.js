import React, { useState } from 'react'
import {
  View, Text, StatusBar, FlatList, TouchableOpacity,
  TouchableWithoutFeedback, Keyboard, ActivityIndicator,
} from 'react-native'
import { IconView, Input, MovieCard } from '../../Components'
import AsyncStorage from '@react-native-community/async-storage'
import { Colors } from '../../Constants'
import Styles from './styles'
import { getMovies } from '../../Controllers'

export default Search = props => {

  // Variables and state
  let searchQuery = ''
  const [data, setData] = useState([])
  const [noData, setNoData] = useState(false)
  const [isActivityShown, setIsActivityShown] = useState(false)

  // User Defined & Handlers
  const _onchangeText = text => {
    searchQuery = text
  }

  const _handleAddToFavorite = async item => {
    let userCurrentMovies;
    await AsyncStorage.getItem('userFavoriteMovies').then(res => {
      if (res == null) {
        userCurrentMovies = []
      } else {
        userCurrentMovies = JSON.parse(res).filter(currentItem => currentItem.id != item.id)
      }
    })
    userCurrentMovies.push(item)
    await AsyncStorage.setItem('userFavoriteMovies', JSON.stringify(userCurrentMovies))
  }


  // Api Call
  const _onSearchPress = () => {
    setIsActivityShown(true)
    Keyboard.dismiss()
    getMovies(searchQuery)
      .then(data => {
        if (data.length == 0) {
          setNoData(true)
          setIsActivityShown(false)
        }
        else {
          setData(data)
          setIsActivityShown(false)
        }
      })
      .catch(err => {
        if (err.response.status == 422) {
          setIsActivityShown(false)
          setNoData(true)
        }
      })
    setNoData(false)
  }

  // Helper component and function
  const _renderItem = ({ item }) => {
    return (
      <MovieCard
        data={item}
        onPress={() => _handleAddToFavorite(item)}
      />
    )
  }

  const _itemSeparator = () => {
    return <View style={{ height: 16 }} />
  }

  return (
    <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
      <View style={Styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={Colors.black} />
        <Text style={Styles.header}>{"Search Movies"}<Text style={Styles.twoDots}>{" :"}</Text></Text>
        <View style={Styles.seprator} />
        <View style={Styles.searchBar}>
          <Input placeholder={'Search for movie ...'} onChangeText={(text) => _onchangeText(text)} />
          <TouchableOpacity style={Styles.iconContainer} onPress={() => _onSearchPress()}>
            <IconView size={40} name={'search1'} iconStyle={Styles.icon} />
          </TouchableOpacity>
        </View>
        {isActivityShown ?
          <View style={Styles.activity}>
            <ActivityIndicator size={50} color={Colors.orange} />
          </View>
          : noData ?
            <View style={Styles.body}>
              <Text style={Styles.bodyText}>{"There's no data match your search."}</Text>
            </View> :
            <FlatList
              data={data}
              renderItem={_renderItem}
              contentContainerStyle={Styles.container}
              keyExtractor={item => item.id + ''}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={_itemSeparator}
            />
        }
      </View>
    </TouchableWithoutFeedback>
  )
}
