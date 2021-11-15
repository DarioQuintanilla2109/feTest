import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native'
import AuthHomeStack from './src/navigators/authHomeStack'
import { createStackNavigator } from '@react-navigation/stack'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import DT from './darkTheme'
import myDarkTheme from './darkTheme'
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { API, graphqlOperation } from 'aws-amplify'

Amplify.configure(config)

function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: 'white' }}>Home Screen</Text>
      </View>
    </SafeAreaView>
  )
}

const HomeStack = createStackNavigator()

function HomeScrenStack({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

function App() {
  const scheme = useColorScheme()
  const MyDarkTheme = DT()

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
      <AuthHomeStack />
    </NavigationContainer>
  )
}

export default App
