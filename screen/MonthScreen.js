<<<<<<< HEAD
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import DatePicker, { getToday, getFormatedDate } from 'react-native-modern-datepicker';
=======
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
>>>>>>> main

export default function MonthScreen({ navigation }) {
  
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <ScrollView>
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
                <TouchableOpacity>
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
    </ScrollView>
  );
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
    backgroundColor: '#fff',
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
    height: 360,
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
});
