import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import imgBack from '../../assets/imgBack.jpg'
import Navbar from '../components/Navbar'
import LeftBarReactions from '../components/LeftBarReactions'
import RightBarReactions from '../components/RightBarReaction'
import CheckButton from '../components/CheckButton'
import BlMenu from '../components/BlMenu'
export default function home({ navigation }) {
  return (
    <ImageBackground
      imageStyle={{ opacity: 0.6 }}
      resizeMode='cover'
      source={imgBack}
      style={styles.imgStyle}
    >
      <SafeAreaView style={styles.container}>
        <Navbar />
        <LeftBarReactions />
        <RightBarReactions />
        <CheckButton />
        <BlMenu />
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    flex: 1,
  },
})
