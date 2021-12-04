import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import DatePicker, { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";

export default class MonthScreen extends Component {
  bfDetailHeader = () => (
   <View>
    <View style={styles.header_earth}>
      <Image
        source={require('../assets/faceIcon/img_earth.png')}
      />
    </View>
    <View style={styles.header_bg}>
        <Image
          source={require('../assets/goal/header_綠線.png')}
          />
      </View>
    </View>
  )

  bfDetailInner = () => (
    <View style={styles.panel}>
      <View style={styles.panelContent}>
        <Text style={styles.panelTitle}>早餐</Text>
        <View style={styles.detailItem}>
          <Image style={styles.detailItemImg}
            source={require('../assets/item-box.png')}
            />
          <Text style={styles.detailItemText}>x</Text>
          <Text style={styles.detailItemText}>1</Text>
        </View>
        <View style={styles.detailItem}>
          <Image style={styles.detailItemImg}
            source={require('../assets/item-chopstick.png')}
            />
          <Text style={styles.detailItemText}>x</Text>
          <Text style={styles.detailItemText}>1</Text>
        </View>
      </View>
    </View>
  )

  bs = React.createRef();
  fall = new Animated.Value(1);

  render() {
    const { navigation } = this.props;
    // const [selectedDate, setSelectedDate] = useState('');
    return (
      <ScrollView>
        <Animated.View style={{opacity: Animated.add(0.3, Animated.multiply(this.fall, 0.8))}}>
          <View style={styles.header}>
            <Image source= {require('../assets/suggest/header-bg.png')} />
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                  style={styles.profileiconStyle}
                  source={require('../assets/icon-profile.png')}
                  />
            </TouchableOpacity>
            <Text style={styles.headerText}>月曆</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.calendar}>
            <DatePicker
              options={{
                backgroundColor: '#FFFFFF',
                headerColor: '#909090',
                textHeaderColor: '#63CFA8',
                textDefaultColor: '#909090',
                selectedTextColor: '#fff',
                mainColor: '#63CFA8',
                textSecondaryColor: '#909090',
                borderColor: '#63CFA8',
              }}
              current={getToday()}
              maximumDate={getToday()}
              placeholder="select date"
              onSelectedChange={date => setSelectedDate(date)}
              mode="calendar"
              style={{
                width: 350,
                height: 325,
                borderRadius: 20 
              }}
            />
            </View>
            <View>
              <View style={styles.totalSection}>
                <Text style={styles.totalText}>當天總數量 : 6</Text>
                <Text style={styles.totalText}>當天總額 : $300</Text>
              </View>
              <View style={styles.todayDetail}>
                <View style={styles.detailTitle}>
                  <Text style={styles.detailText}>類別</Text>
                  <Text style={styles.detailText}>垃圾量</Text>
                  <Text style={styles.detailText}>金額</Text>
                </View>
                <View>
                  <View style={styles.mealDetail}>
                    <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                      <Text style={styles.mealDetailText}>早餐</Text>
                    </TouchableOpacity>
                    <Text style={styles.mealDetailText}>2</Text>
                    <Text style={styles.mealDetailText}>$30</Text>
                  </View>
                  <View style={styles.dashLine} />
                  <View style={styles.mealDetail}>
                    <TouchableOpacity>
                      <Text style={styles.mealDetailText}>午餐</Text>
                    </TouchableOpacity>
                    <Text style={styles.mealDetailText}>3</Text>
                    <Text style={styles.mealDetailText}>$120</Text>
                  </View>
                  <View style={styles.dashLine} />
                  <View style={styles.mealDetail}>
                    <TouchableOpacity>
                      <Text style={styles.mealDetailText}>晚餐</Text>
                    </TouchableOpacity>
                    <Text style={styles.mealDetailText}>1</Text>
                    <Text style={styles.mealDetailText}>$150</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Animated.View>
        <BottomSheet
        ref={this.bs}
        snapPoints={[500, 0]}
        renderContent={this.bfDetailInner}
        renderHeader={this.bfDetailHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 275,
  },
  headerText: {
    color: '#909090',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: -180,
    marginLeft: 50,
  },
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:330,
    marginTop:-230
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    height: 850,
  },
  calendar: {
    marginTop: -100, 
    borderRadius:20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
  },
  totalSection: {
    width: 340,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 10,
    marginBottom: -10,
    justifyContent: 'space-between'
  },
  totalText: {
    fontSize: 20,
    color: '#909090',
    fontWeight:'bold'
  },
  todayDetail: {
    backgroundColor: '#fff',
    width: 365,
    height: 350,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    marginTop: 70,
    bottom:30,
  },
  detailTitle: {
    backgroundColor: '#63CFA8',
    width: 365,
    height: 62,
    borderRadius: 20,
    flexDirection: "row",
    marginBottom: -10,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailText: {
    color: '#fff',
    fontSize: 20,
    fontWeight:'bold'
  },
  mealDetail: {
    width: 320,
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealDetailText: {
    fontSize: 20,
    color: '#909090',
    fontWeight:'bold'
  },
  dashLine: {
    marginTop: 20,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#35A67D',
  },
  header_earth: {
    alignItems: 'center',
    marginBottom: -20,
    zIndex: 1,
  },
  header_bg: {
    height: 50,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor:'#FFFFFF',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  panel: {
    height: 350,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  panelContent: {
    marginTop: 25,
    alignItems: 'center',
  },
  panelTitle: {
    color: '#909090',
    fontWeight: 'bold',
    fontSize: 20,
  },
  detailItem: {
    backgroundColor: '#BCECDB',
    width: 250,
    height: 60,
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 5,
  },
  detailItemImg: {
    width: 45,
    height: 45,
  },
  detailItemText: {
    color: '#909090',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
