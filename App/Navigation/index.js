import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createAppContainer } from 'react-navigation';
import { FavoriteScreen, SearchScreen } from '../Screens'
import { Colors } from '../../App/Constants'
import { IconView } from '../../App/Components'

const mainStack = createMaterialBottomTabNavigator(
  {
    Favorite: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <IconView size={23} iconStyle={{ color: tintColor }} name={'heart'} />
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <IconView size={23} iconStyle={{ color: tintColor }} name={'search1'} />
      }
    },
  },
  {
    initialRouteName: 'Favorite',
    activeColor: Colors.orange,
    inactiveColor: Colors.oxfordBlue,
    barStyle: {
      backgroundColor: Colors.white
    },
  },
)

export default () => createAppContainer(mainStack)
