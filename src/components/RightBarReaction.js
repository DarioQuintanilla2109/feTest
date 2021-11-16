import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native'
import img from '../../assets/imgBack.jpg'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function LeftBarReactions() {
  const counterE1 = () => {
    console.log('button pressed')
  }
  const counterE2 = () => {
    console.log('button pressed')
  }
  const counterE3 = () => {
    console.log('button pressed')
  }
  const counterE4 = () => {
    console.log('button pressed')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={counterE1} style={styles.spacer}>
        <Image source={img} style={styles.img} />
      </TouchableOpacity>
      <TouchableOpacity onPress={counterE2} style={styles.spacer}>
        <Icon name={'ios-cart'} color={'white'} size={40} />
      </TouchableOpacity>
      <TouchableOpacity onPress={counterE3} style={styles.spacer}>
        <Icon name={'ios-arrow-redo'} color={'white'} size={40} />
      </TouchableOpacity>
      <TouchableOpacity onPress={counterE4} style={styles.spacer}>
        <Icon name={'ios-chatbubble-ellipses'} color={'white'} size={40} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    marginLeft: windowWidth / 1.13,
    position: 'absolute',
    marginTop: windowHeight / 1.4,
  },
  txtStyle: {
    color: 'white',
    marginRight: 7,
    marginTop: 1,
  },
  spacer: {
    marginTop: 15,
  },
  img: {
    borderRadius: 100,
    height: 30,
    width: 30,
    borderColor: 'white',
    borderWidth: 1,
  },
})
