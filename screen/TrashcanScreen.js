import React, { Component,Fragment } from "react";
import {Text,StatusBar,Button,StyleSheet,Platform,API,TouchableOpacity,Image,View,ScrollView,TouchableHighlight,SafeAreaView} from 'react-native';

const TrashcanScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.contentStyle}>
            
            <Image
                style={styles.circle1Style}
                source={require('../assets/trashcan/circle1.png')}
                />
            <Image
                style={styles.circle2Style}
                source={require('../assets/trashcan/circle2.png')}
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
    backgroundColor: '#fff',
    width:414,
    height:896,
  },
  titleStyle:{
    fontSize:24,
    fontWeight:"bold",
    color:"#fff",
    marginLeft:70,
    marginTop:-35
  },
  circle1Style:{
    width:387,
    height:265,
    marginTop:-60
  },
  circle2Style:{
    width:153,
    height:180,
    marginTop:-270,
    marginLeft:270,
  },
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:325,
    marginTop:-100
  },
  trashledStyle:{
    width:356,
    height:68,
    marginTop:100,
    marginLeft:30
  },
  trashcanStyle:{
    width:350,
    height:407,
    marginLeft:32
  },
  btnaddtrashStyle:{
    width:93,
    height:42,
    marginTop:15,
    marginLeft:300,
    bottom:20
  },
});

export default TrashcanScreen;