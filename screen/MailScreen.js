import React , { Component, Fragment }from 'react';
import { TouchableOpacity, StyleSheet, Text, View ,Image} from 'react-native';

export default function MailScreen() {
  return (
    <View style={styles.setting}>
      <View style={styles.content}>
        <Image source={require('../assets/setting/contact.png')} style={{ width: 80, height: 80 }}/>
        <Text style={styles.title}>聯絡我們</Text>
        <Text style={styles.text}>e-mail : lol123@gmail.com</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  setting:{
    backgroundColor: '#fff',
    width: 320,
    height: 480,
    marginTop:130,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    justifyContent: 'center'
  },
  content:{
    height: 320,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title:{
    fontSize:22,
    fontWeight: 'bold',
    color: '#909090',
    marginBottom: 10
  },
  text:{
    fontSize:20,
    fontWeight: 'bold',
    color: '#909090',
    marginBottom: 100
  },
});