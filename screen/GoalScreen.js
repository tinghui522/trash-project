import { StatusBar } from 'expo-status-bar';
import React, { Component , navigation } from "react";
import {   
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Image, 
  View, 
  ScrollView, 
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";

export default class GoalScreen extends Component {
  addGoalHeader = () => (
    <View style={styles.header_bg}>
      <Image
        source={require('../assets/goal/header_線線.png')}
        />
    </View>
  )
  
  addGoalInner = () => (
    <View style={styles.panel}>
      <View style={styles.panelContent}>
        <TouchableOpacity>
          <Image
            style={styles.iconstyle}
            source={require('../assets/icon-gray-box.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.iconstyle}
            source={require('../assets/icon-gray-plate.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.iconstyle}
            source={require('../assets/icon-gray-chopstick.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.iconstyle}
            source={require('../assets/icon-gray-ketchup.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.panelContent}>
        <TouchableOpacity>
          <Image
            style={styles.iconstyle}
            source={require('../assets/icon-gray-cup.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.iconstyle}
            source={require('../assets/icon-gray-strow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.iconstyle}
            source={require('../assets/icon-gray-bag.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.iconstyle}
            source={require('../assets/icon-gray-trashother.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.btnCheck}>
        <TouchableOpacity onPress={() => this.bs.current.snapTo(1)}>
          <Image
            style={styles.iconstyle}
            source={require('../assets/btn-check.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => this.bs.current.snapTo(1)}>
          <Image
            style={styles.iconstyle}
            source={require('../assets/btn-check.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )

  bs = React.createRef();
  fall = new Animated.Value(1);

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>垃圾量目標</Text>
        <View style={styles.allGoal}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.goal_bg}>
              <Image
                style={styles.faceGifStyle}
                source={require('../assets/faceGif/faceIcon_cup.gif')}
              />
              <ProgressBar progress={0.8} style={styles.probarStyle} color={'#63CFA8'}/>
              <Text style={styles.probarText}>8/10</Text>
            </View>
            <View style={styles.goal_bg}>

            </View>
            <View style={styles.goal_bg}>

            </View>
          </ScrollView>
        </View>
        <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
          <Image source={require('../assets/goal/btn_addgoal.png') } style={styles.btn_addgoal}/>
        </TouchableOpacity>
        <BottomSheet
          ref={this.bs}
          snapPoints={[400, 0]}
          renderContent={this.addGoalInner}
          renderHeader={this.addGoalHeader}
          initialSnap={1}
          callbackNode={this.fall}
          enabledGestureInteraction={true}
        />
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F6F6F6',
    alignItems:'center',
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#707070',
    marginTop: 100,
  },
  allGoal: {
    marginTop: 50,
  },
  goal_bg: {
    width: 300,
    height: 470,
    backgroundColor:'#fff',
    borderRadius: 20,
    alignItems:'center',
    marginLeft: 10,
    marginRight: 10,
  },
  faceGifStyle: {
    width: 330,
    height: 330,
    marginTop: 30,
  },
  probarStyle: {
    width: 190,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    backgroundColor: "#E7FFF6",
    marginTop: -20,
  },
  probarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A9F7A',
    marginTop: 20,
  },
  btn_addgoal: {
    justifyContent: 'center',
  },
  line1:{
    flexDirection: 'row',
    height:40,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'#63CFA8',
    borderRadius: 10,
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3,},
    shadowOpacity: 6,
  },
  panel: {
    height: 360,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
  },
  panelContent: {
    marginTop: 15,
    flexDirection: 'row',
  },
  iconstyle:{
    margin: 12,
  },
  btncheck:{
    width:34,
    height:33,
    left: 10
  },
  header_bg:{
    height: 50,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor:'#F6F6F6',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
});
