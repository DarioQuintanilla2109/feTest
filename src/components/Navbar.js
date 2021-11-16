import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Navbar() {
  const [name, setName] = useState('Azora')
  return (
    <View style={styles.containerRow}>
      <View>
        <Icon name={'ios-caret-back-outline'} color={'white'} size={40} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.txtColor}>07:34:28</Text>
        <Text style={styles.txtSub}>2 picks left</Text>
      </View>
      <View>
        <Text style={styles.txtColor}>{name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 3,
  },
  txtColor: {
    color: 'white',
    fontSize: 28,
  },
  txtSub: {
    color: 'white',
    fontSize: 18,
  },
})
