import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function LeftBarReactions() {
  const [emote1, setEmote1] = useState(8)
  const [emote2, setEmote2] = useState(153)
  const [emote3, setEmote3] = useState(47)
  const [emote4, setEmote4] = useState(11)
  const [emote5, setEmote5] = useState(5)
  const [emote6, setEmote6] = useState(49)

  const counterE1 = () => {
    setEmote1(emote1 + 1)
  }
  const counterE2 = () => {
    setEmote2(emote2 + 1)
  }
  const counterE3 = () => {
    setEmote3(emote3 + 1)
  }
  const counterE4 = () => {
    setEmote4(emote4 + 1)
  }
  const counterE5 = () => {
    setEmote5(emote5 + 1)
  }
  const counterE6 = () => {
    setEmote6(emote6 + 1)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={counterE1} style={styles.spacer}>
        <Icon name={'ios-sad-outline'} color={'white'} size={40} />
        <Text style={styles.txtStyle}>{emote1}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={counterE2} style={styles.spacer}>
        <Icon name={'ios-happy-outline'} color={'white'} size={40} />
        <Text style={styles.txtStyle}>{emote2}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={counterE3} style={styles.spacer}>
        <Icon name={'ios-sad-outline'} color={'white'} size={40} />
        <Text style={styles.txtStyle}>{emote3}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={counterE4} style={styles.spacer}>
        <Icon name={'ios-happy-outline'} color={'white'} size={40} />
        <Text style={styles.txtStyle}>{emote4}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={counterE5} style={styles.spacer}>
        <Icon name={'ios-sad-outline'} color={'white'} size={40} />
        <Text style={styles.txtStyle}>{emote5}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={counterE6} style={styles.spacer}>
        <Icon name={'ios-happy-outline'} color={'white'} size={40} />
        <Text style={styles.txtStyle}>{emote6}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    marginHorizontal: 3,
    position: 'absolute',
    marginTop: windowHeight / 8,
  },
  txtStyle: {
    color: 'white',
  },
  spacer: {
    alignItems: 'center',
    margin: 3,
  },
})
