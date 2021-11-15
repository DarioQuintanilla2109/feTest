import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import signUp from '../screens/signUp'
import home from '../screens/home'
const authHome = createStackNavigator()

export default function authHomeStack({ navigation }) {
  return (
    <authHome.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
    >
      <authHome.Screen name='signUp' component={signUp} />
      <authHome.Screen name='home' component={home} />
    </authHome.Navigator>
  )
}
