import React, { Component , useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, ScrollView, SafeAreaView, Modal} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";
import { ModalPicker } from "../component/ModalPicker";

const AddGoalHeader = () => (
  <View style={styles.header_bg}>
    <Image
      source={require('../assets/goal/header_線線.png')}
      />
  </View>
)

const AddGoalInner = () => (
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
          source={require('../assets/icon-bag2.png')}
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
      <TouchableOpacity 
        //onPress={this.onDecrement}
      >
        <Text style={styles.btnQty}>-</Text>
      </TouchableOpacity>
        {/* <Text style={styles.qty}>{this.state.due_date_count}</Text> */}
        <View style={styles.qty_bg}>
          <Text style={styles.qty}>1</Text>
        </View>
      <TouchableOpacity 
        //onPress={this.onIncrement}
      > 
        <Text style={styles.btnQty}>+</Text>
      </TouchableOpacity>
    </View>
      <TouchableOpacity onPress={() => bs.current.snapTo(1)}>
        <Image
          style={styles.btnCheck}
          source={require('../assets/goal/btn_check.png')}
        />
      </TouchableOpacity>
  </View>
)

// const onValueChange = (flag,value) => {
//   if(flag ==1){
//   this.setState({selected:value});
//   }else{
//     this.setState({dropdown:value});
//   }
// };

const bs = React.createRef();
const fall = new Animated.Value(1);

export default function GoalScreen({ navigation }) { 
  const [chooseData, setchooseData] = useState('12月');
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }
  const setData = (option) =>{
    setchooseData(option)
  }

  
  return (
    <View style={{flex:1}}>
      <Animated.View style={{backgroundColor:'#F6F6F6', alignItems:'center', height: 845,
        opacity: Animated.add(0.3, Animated.multiply(fall, 0.8))}}>
        <Text style={styles.titleText}>垃圾量目標</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.profileiconStyle}
            source={require('../assets/icon-profile.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => changeModalVisibility(true)}
          style={styles.touchableOpacity}
        >
          <Text style={styles.text}>{chooseData}</Text>
          <Image
              style={styles.downbtn}
              source={require('../assets/goal/monthdown_btn.png')}
            />
        </TouchableOpacity>
        <Modal 
          transparent={true}
          animationType="fade"
          visible={isModalVisible}
          nRequestClose={() => changeModalVisibility(false)}
        >
          <ModalPicker
            changeModalVisibility={changeModalVisibility}
            setData={setData}
          />
        </Modal>
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
        <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
          <View style={styles.btn_addgoal}>
            <Text style={styles.addgoalText}>+新目標</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
      <BottomSheet
        ref={bs}
        snapPoints={[700, 0]}
        renderContent={AddGoalInner}
        renderHeader={AddGoalHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
    </View>
  );
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
    width:50,
    height:50,
    marginLeft:290,
    marginTop:-90
  },
  text:{
    marginVertical:15,
    fontSize:24,
    fontWeight:'bold',
    color: '#909090'
  },
  downbtn:{
    marginLeft:60,
    marginTop:-35
  },
  touchableOpacity:{
    backgroundColor:'#E2E2E2',
    alignSelf:'stretch',
    paddingHorizontal:10,
    marginHorizontal:20,
    width:100,
    height:60,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
  },
  picker:{
    width: 100,
    height: 58,
    backgroundColor:'#E2E2E2',
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
  },
  allGoal: {
    marginTop: 20,
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
    width:170,
    height:45,
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