import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import {   
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Image, 
  View, 
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";

export default class GoalScreen extends Component {
  addGoalHeader = () => (
    <View style={styles.line1}>
      <Text style={{fontSize:18, color:'#fff'}}>新目標</Text>
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

        {/* //按鈕 個人資料  */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  <Image
                      style={styles.profileiconStyle}
                      source={require('../assets/icon-profile.png')}
                      />
              </TouchableOpacity>
        <Image source={require('../assets/goal/bg_goal.png')} style={{top: 80,right:10}}/>
        <Image source={require('../assets/goal/cup_goal.png')} style={{bottom: 120,left:140}}/>
        <Image source={require('../assets/goal/box_goal.png')} style={{bottom: 270,left:20}}/>
        <View style={styles.goal_content}>
          <View style={styles.bg_date_goal}>
            <Image source={require('../assets/goal/icon_left.png')} />
            <Text style={styles.text_date}>2021年   5月</Text>
            <Image source={require('../assets/goal/icon_right.png')} />
          </View>
          <View style={styles.bg_item_goal}>
            <Text style={styles.text_itemTitle_goal}>本月目標</Text>
            <View style={styles.item_goal}>
              <Image source={require('../assets/goal/btn_checkout_goal.png')}  />
              <Image source={require('../assets/goal/icon_cup_goal.png')} style={{bottom:10}}/>
              <Image source={require('../assets/goal/cup_progressbar.png') } style={{bottom:5}}/>
              <Text style={styles.text_item_goal}>8個</Text>
            </View>
            <View style={styles.item_goal}>
              <Image source={require('../assets/goal/btn_checkout_goal.png')}  />
              <Image source={require('../assets/goal/icon_box_goal.png')} style={{bottom:15}}/>
              <Image source={require('../assets/goal/box_progressbar.png') } style={{bottom:5}}/>
              <Text style={styles.text_item_goal}>4個</Text>
            </View>
            <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
              <Image source={require('../assets/goal/btn_addgoal.png') } style={styles.btn_addgoal}/>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
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
    backgroundColor:'#fff',
  },
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:325,
    marginTop:-60
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#707070',
    marginTop: 100,
    marginLeft:160,
  },
  goal_content: {
    alignItems: 'center',
    bottom: 140
  },
  bg_date_goal: {
    alignItems: 'center',
    width: 350,
    height: 50,
    backgroundColor: '#63CFA8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3,},
    shadowOpacity: 0.5,
    elevation: 2,
    borderRadius: 10,
    zIndex: 5,
  },
  text_date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  bg_item_goal: {
    backgroundColor: '#fff',
    width: 350,
    height: 267,
    borderRadius: 20,
    bottom: 16,
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3,},
    shadowOpacity: 1,
    alignItems: 'center',
    zIndex:-3,
  },
  text_itemTitle_goal: {
    marginLeft: 25,
    marginTop: 35,
    marginBottom: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#707070',
    borderRadius: 20,
    right: 130
  },
  text_item_goal: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#707070'
  },
  item_goal: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
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
  }
});
