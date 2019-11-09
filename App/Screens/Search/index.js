import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, FlatList } from 'react-native'
import { Colors } from '../../Constants'
import Styles from './styles'
import { getMovies } from '../../Controllers'

export default Search = props => {
  // useEffect(() => {
  //   getMovies('avengers').then(data => console.log(data))
  // }, [])
  return (
    <View style={Styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Text style={Styles.header}>{'Search Screen'}</Text>
    </View>
  )
}
