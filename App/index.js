import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import MainStackCreator from './Navigation'

export default App = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])

    const MainStack = MainStackCreator()
    return <MainStack />

}