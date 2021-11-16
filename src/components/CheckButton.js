import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native'
import img from '../../assets/imgBack.jpg'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function CheckButton() {
  const [clicked, setClicked] = useState(false)

  const clickedFunc = () => {
    setClicked(!clicked)
  }

  return (
    <TouchableOpacity onPress={clickedFunc} style={styles.container}>
      {clicked ? (
        <Icon name='ios-checkmark-circle' color={'white'} size={80} />
      ) : (
        <Icon
          name='ios-checkmark-circle-outline'
          color={'rgba(255,255,255,.3)'}
          size={80}
        />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    top: windowHeight / 1.12,
    left: windowWidth / 2.4,
    position: 'absolute',
  },
})
