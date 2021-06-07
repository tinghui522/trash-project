import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <ScrollView>
    <View >
      <Image source={require('../assets/setting/bg.png')}/>
      <TouchableOpacity>
        <Image source={require('../assets/setting/btn_back.png')} style={{bottom: 200,left: 20}}/>
      </TouchableOpacity>
      <View style={styles.center}>
        <View style={styles.bg_personal_form}>
          <View style={styles.personal_form}>
            <Image source={require('../assets/setting/big_icon-profile.png')}/>
            <Text style={styles.text_personal_form}>Sandy</Text>
            <Text style={styles.text_personal_form}>開始日期：2021 / 4 / 9</Text>
          </View>
          <View style={styles.setting}>
            <Text style={{marginBottom: 40,marginTop:50,fontWeight: 'bold',color:'#909090'}}>語言</Text>
            <Text style={{marginBottom: 40,fontWeight: 'bold',color:'#909090'}}>帳號管理</Text>
            <Text style={{marginBottom: 40,fontWeight: 'bold',color:'#909090'}}>通知</Text>
            <Text style={{marginBottom: 40,fontWeight: 'bold',color:'#909090'}}>Q and A</Text>
            <Text style={{marginBottom: 40,fontWeight: 'bold',color:'#909090'}}>登出</Text>
            <Text style={{marginBottom: 40,fontWeight: 'bold',color:'#909090'}}>聯絡我們</Text>
          </View>
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  bg_personal_form: {
    width: 320,
    height: 600,
    backgroundColor: '#63CFA8',
    alignItems: 'center',
    bottom: 50,
    shadowColor: '#707070',
    shadowOffset: { width:6, height: 6,top:20 },
    shadowOpacity: 6,
    elevation: 5,
    borderRadius: 20
  },
  personal_form: {
    alignItems: 'center',
    color: 'white',
    bottom: 40,
  },
  text_personal_form :{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  setting: {
    backgroundColor: '#fff',
    width: 320,
    height: 467,
    alignItems: 'center',
    borderRadius: 20
  }
});
