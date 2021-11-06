import React, { Component,Fragment } from "react";
import {Text,StatusBar,Button,StyleSheet,Platform,API,TouchableOpacity,Image,View,ScrollView,TouchableHighlight,SafeAreaView} from 'react-native';

const TrashcanScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.contentStyle}>
          <Image
              style={styles.homebgStyle}
              source={require('../assets/trashcan/home-bg.png')}
              />
          <Text style={styles.titleStyle}>本月垃圾量 16 件</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                  style={styles.profileiconStyle}
                  source={require('../assets/icon-profile.png')}
                  />
          </TouchableOpacity>
          <Image
          style={styles.trashledStyle}
          source={require('../assets/trashcan/trash-led.png')}
          />
          <Image
          style={styles.trashcanStyle}
          source={require('../assets/trashcan/trashcan.png')}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Record')}>
              <Image
                  style={styles.btnaddtrashStyle}
                  source={require('../assets/trashcan/btn-addtrash.png')}
                  />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container0: { flex: 1},
  contentStyle: {
    backgroundColor: '#E5E5E5',
    width:414,
    height:896,
    alignItems: 'center',
  },
  titleStyle:{
    fontSize:26,
    fontWeight:"bold",
    color:"#fff",
    marginTop:-70
  },
  homebgStyle:{
    width:414,
    height:194,
    marginTop:-48
  },
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:290,
    marginTop:-110
  },
  trashledStyle:{
    width:331,
    height:39,
    marginTop:90,
  },
  trashcanStyle:{
    width:319,
    height:396,
    marginTop:30,
  },
  btnaddtrashStyle:{
    marginTop:20,
    marginLeft:250,
  },
});

export default TrashcanScreen;