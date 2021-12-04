import React, { Component , useState } from "react";
import {   StyleSheet, Text, TouchableOpacity, Image, View, ScrollView, SafeAreaView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated, { interpolate }from "react-native-reanimated";
import SelectDropdown from 'react-native-select-dropdown';
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
      <Image
        style={styles.faceIcon}
        source={require('../assets/faceIcon/faceIcon_bag.png')}
      />
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
            source={require('../assets/icon-bag.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.iconstyle}
            source={require('../assets/icon-gray-trashother.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.qtyBlock}>
        <Text style={styles.qtyText}>數量</Text>
        <TouchableOpacity>
          <Text style={styles.btnQty}>-</Text>
        </TouchableOpacity>
        <View style={styles.qty_bg}>
          <Text style={styles.qty}>1</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.btnQty}>+</Text>
        </TouchableOpacity>
      </View>
        <TouchableOpacity onPress={() => this.bs.current.snapTo(1)}>
          <Image
            style={styles.btnCheck}
            source={require('../assets/goal/btn_check.png')}
          />
        </TouchableOpacity>
    </View>
  )

  bs = React.createRef();
  fall = new Animated.Value(1);

  render() {
    const { navigation } = this.props;
    const month = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    return (
      <View style={{flex:1}}>
        <Animated.View style={{backgroundColor:'#F6F6F6', alignItems:'center', height: 845,
          opacity: Animated.add(0.3, Animated.multiply(this.fall, 0.8))}}>
          <Text style={styles.titleText}>垃圾量目標</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={styles.profileiconStyle}
              source={require('../assets/icon-profile.png')}
            />
          </TouchableOpacity>
          <SelectDropdown
            style={styles.monthselected}
            data={month}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
          <View style={styles.allGoal}>
            <Animated.ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.goal_bg}>
                <Image
                  style={styles.faceGifStyle}
                  source={require('../assets/faceGif/faceIcon_box.gif')}
                />
                <ProgressBar progress={0.2} style={styles.probarStyle} color={'#63CFA8'}/>
                <Text style={styles.probarText}>4/20</Text>
              </View>
              <View style={styles.goal_bg}>
                <Image
                  style={styles.faceGifStyle}
                  source={require('../assets/faceGif/faceIcon_cup.gif')}
                />
                <ProgressBar progress={0.8} style={styles.probarStyle} color={'#63CFA8'}/>
                <Text style={styles.probarText}>8/10</Text>
              </View>
              <View style={styles.goal_bg}>
                <Image
                  style={styles.faceGifStyle}
                  source={require('../assets/faceGif/faceIcon_chopstick.gif')}
                />
                <ProgressBar progress={0.5} style={styles.probarStyle} color={'#63CFA8'}/>
                <Text style={styles.probarText}>5/10</Text>
              </View>
            </Animated.ScrollView>
          </View>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View style={styles.btn_addgoal}>
              <Text style={styles.addgoalText}>+新目標</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
        <BottomSheet
          ref={this.bs}
          snapPoints={[700, 0]}
          renderContent={this.addGoalInner}
          renderHeader={this.addGoalHeader}
          initialSnap={1}
          callbackNode={this.fall}
          enabledGestureInteraction={true}
        />
      </View>
    );
  }
  onValueChange = (flag,value) => {
    if(flag ==1){
    this.setState({selected:value});
    }else{
      this.setState({dropdown:value});
    }
  };
  }

const styles = StyleSheet.create({

  container:{
    backgroundColor:'#F6F6F6',
    alignItems:'center',
    flex: 1,
  },
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:325,
    marginTop:-80
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#707070',
    marginTop: 100,
  },
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:290,
    marginTop:-80
  },
  monthselected:{
    backgroundColor:'#E2E2E2', 
    fontSize: 26,
    fontWeight: 'bold',
    color: '#909090' 
  },
  allGoal: {
    marginTop: 50,
    height: 550,
  },
  goal_bg: {
    width: 300,
    height: 470,
    backgroundColor:'#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    alignItems:'center',
    marginLeft: 10,
    marginRight: 10,
  },
  faceGifStyle: {
    width: 330,
    height: 330,
    marginTop: 20,
  },
  probarStyle: {
    width: 190,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    backgroundColor: "#E7FFF6",
    marginTop: -10,
  },
  probarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A9F7A',
    marginTop: 20,
  },
  btn_addgoal: {
    width:130,
    height:50,
    backgroundColor: '#FF867C',
    borderRadius: 20,
    marginTop: -50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addgoalText:{
    fontSize:20,
    fontWeight:"bold",
    color: '#fff',
  },
  header_bg:{
    height: 50,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor:'#FFFFFF',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  panel: {
    height: 580,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  panelContent: {
    marginTop: 15,
    flexDirection: 'row',
  },
  faceIcon: {
    marginTop: 20,
    height: 190,
    width: 190,
  },
  iconstyle: {
    margin: 12,
    height: 70,
    width: 45,
  },
  btncheck:{
    width:34,
    height:33,
    marginTop: 10,
    left: 10
  },
  qtyBlock:{
    flexDirection: 'row',
    width:240,
    height:50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor:'#D9D9D9',
    borderRadius: 20,
    marginTop: 20,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  qtyText:{
    color: '#909090',
    fontSize:18,
    fontWeight:"bold",
    marginRight: 15,
    marginLeft: 15
  },
  btnQty: {
    color: '#909090',
    fontSize: 22,
    fontWeight:"bold",
  },
  qty_bg:{
    width:70,
    height:30,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qty:{
    color: '#909090',
    fontSize:16,
    fontWeight:"bold",
  },
  btnCheck:{
    width: 42,
    height: 32,
    marginTop: 15,
  },
});