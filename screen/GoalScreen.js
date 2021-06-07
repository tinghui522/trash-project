import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

export default function GoalScreen({ navigation }) {
  return (
    <View>
      <View style={styles.header_goal}>
        <Text style={styles.titleText}>垃圾量目標</Text>
      </View>

      {/* //按鈕 個人資料  */}
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                    style={styles.profileiconStyle}
                    source={require('../assets/icon-profile.png')}
                    />
            </TouchableOpacity>
      <Image source={require('../assets/goal/bg_goal.png')} style={{top: 50,right:10}}/>
      <Image source={require('../assets/goal/cup_goal.png')} style={{bottom: 150,left:140}}/>
      <Image source={require('../assets/goal/box_goal.png')} style={{bottom: 300,left:20}}/>
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
          <Image source={require('../assets/goal/btn_addgoal.png') } style={styles.btn_addgoal}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:325,
    marginTop:-50
  },
  header_goal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#707070'
  },
  goal_content: {
    alignItems: 'center',
    bottom: 180
  },
  bg_date_goal: {
    alignItems: 'center',
    width: 350,
    height: 50,
    backgroundColor: '#63CFA8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: "#000",
    shadowOffset: { width:5, height: 6 },
    shadowOpacity: 0.2,
    elevation: 2,
    borderRadius: 20
  },
  text_date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  bg_item_goal: {
    width: 350,
    height: 267,
    borderRadius: 20,
    bottom: 16,
    shadowColor: "#000",
    shadowOffset: { width:3 },
    shadowOpacity: 0.2,
    alignItems: 'center',
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
  footer: {
    bottom: 130,
    shadowColor: "#000",
    shadowOffset: { width:5, height: 6 },
    shadowOpacity: 0.2,
    
  },
  footer_content: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 414,
    height: 100,
    borderRadius: 20,
    paddingTop: 20,
  }
});
