import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { FavoriteScreen, SearchScreen } from '../Screens'

export default createMaterialBottomTabNavigator(
    {
        Search: { screen: SearchScreen },
        Favorite: { screen: FavoriteScreen },
    },
    {
        initialRouteName: 'Search',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
    }
)

