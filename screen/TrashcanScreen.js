import React, { Component, Fragment } from "react";
import {
  Text,
  StatusBar,
  Button,
  StyleSheet,
  Platform,
  API,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  TouchableHighlight,
  SafeAreaView
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";
import RecordScreen from "./RecordScreen";
import trashbar from "../trash_homePage-main/js/trashbar";
export default class TrashcanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addHeader = () => (
    <View style={styles.header_bg}>
      <Image
        style={styles.headerLine}
        source={require('../assets/trashcan/header_線線.png')}
        />
    </View>
  )

  addTrash = () => (
    <View style={styles.bsContainer}>
      <RecordScreen></RecordScreen>
    </View>
  )

  bs = React.createRef();
  fall = new Animated.Value(1);

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{flex:1}}>
        <View>
          <Animated.View style={{backgroundColor: '#E5E5E5', width:414, height:900, alignItems: 'center',
            opacity: Animated.add(0.3, Animated.multiply(this.fall, 1.0))}}>
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
                  <Image
                  style={styles.trash1Style}
                  source={require('../assets/item-bag.png')}
                  /> 
                  <Image
                  style={styles.trash2Style}
                  source={require('../assets/item-box.png')}
                  /> 
                  <Image
                  style={styles.trash3Style}
                  source={require('../assets/item-chopstick.png')}
                  /> 
                  <Image
                  style={styles.trash4Style}
                  source={require('../assets/item-cup.png')}
                  /> 
                  <Image
                  style={styles.trash5Style}
                  source={require('../assets/item-box.png')}
                  />
                  <Image
                  style={styles.trash6Style}
                  source={require('../assets/item-plate.png')}
                  />
                  {/* <View>
                  <trashbar></trashbar>
                  </View> */}
              <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                  <Image
                      style={styles.btnaddtrashStyle}
                      source={require('../assets/trashcan/btn-addtrash.png')}
                      />
              </TouchableOpacity>
          </Animated.View>
          <BottomSheet
            ref={this.bs}
            snapPoints={[875, 0]}
            renderHeader={this.addHeader}
            renderContent={this.addTrash}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}
          />

        </View>
      </SafeAreaView>
    )
  }
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
  trash1Style:{
    width:80,
    height:80,
    marginTop:-100,
  },
  trash2Style:{
    width:80,
    height:80,
    marginTop:-80,
    marginLeft:120
  },
  trash3Style:{
    width:80,
    height:80,
    marginTop:-80,
    marginLeft:-130
  },
  trash4Style:{
    width:80,
    height:80,
    marginTop:-130,
    marginLeft:150
  },
  trash5Style:{
    width:80,
    height:80,
    marginTop:-100,
    marginLeft:-140
  },
  trash6Style:{
    width:80,
    height:80,
    marginTop:-80,
    marginLeft:20
  },
  btnaddtrashStyle:{
    marginTop:120,
    marginLeft:250,
  },
  header_bg:{
    height: 50,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor:'#F6F6F6',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  bsContainer:{
    backgroundColor:'#F6F6F6',
  },
  btnaddtrashStyle:{
    marginTop:20,
    marginLeft:250,
  },
});

