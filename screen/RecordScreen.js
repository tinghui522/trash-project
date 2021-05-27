import React, { Component,Fragment } from "react";
import {Text,StatusBar,Button,StyleSheet,Platform,API,TouchableOpacity,Image,View,ScrollView,TouchableHighlight,SafeAreaView, ImageBackground,navigation} from 'react-native';

const RecordScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <Image
                    style={styles.circle1Style}
                    source={require('../assets/circle1.png')}
                    />
                <Text style={styles.titleStyle}>本月垃圾量16件</Text>
                <Image
                    style={styles.circle2Style}
                    source={require('../assets/circle2.png')}
                    />
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image
                        style={styles.profileiconStyle}
                        source={require('../assets/icon-profile.png')}
                        />
                </TouchableOpacity>
                <View style={styles.contentStyle}>
                    <Image
                    style={styles.trashledStyle}
                    source={require('../assets/trash-led.png')}
                    />
                    <Image
                    style={styles.trashcanStyle}
                    source={require('../assets/trashcan.png')}
                    />
                </View>
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
    marginLeft:50,
    marginTop:-20
  },
  circle1Style:{
    width:414,
    height:205,
  },
  circle2Style:{
    width:125,
    height:147,
  },
  profileiconStyle:{
    width:58,
    height:58,
  },
  trashledStyle:{
    width:356,
    height:68,
  },
  trashcanStyle:{
    width:350,
    height:407,
  },
});

export default RecordScreen;