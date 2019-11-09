import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Colors } from '../../Constants'
import { MovieCard } from '../../Components/'
import Styles from './styles'

export default Favorite = props => {
  return (
    <View style={Styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <MovieCard />
    </View>
  )
}
