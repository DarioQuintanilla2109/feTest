import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native'
import img from '../../assets/imgBack.jpg'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function BlMenu() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View styles={styles.container}>
      <Text style={styles.txtColor}>19/71</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon
          style={{ top: windowHeight / 1.25, marginLeft: 10 }}
          name='ios-ellipsis-horizontal'
          size={40}
          color='white'
        />
      </TouchableOpacity>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonsView}>
            <Text>Hello World!</Text>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: 'absolute',
  },
  txtColor: {
    color: 'white',
    top: windowHeight / 1.3,
    marginLeft: 10,
  },
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  modalButtonsView: {
    alignItems: 'center',
    top: windowHeight / 2,
  },
})
