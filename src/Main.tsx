import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {Text,View} from 'react-native'
import { BotomTabsNavigator } from './presentation/navigators/BotomTabsNavigator'

export const Main = () => {

    return (
        <NavigationContainer>
            <BotomTabsNavigator/>
        </NavigationContainer>
    )
}