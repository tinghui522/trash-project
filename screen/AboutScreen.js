import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.center}>
    <Image source={require('../assets/setting/bg.png')}/>
      <TouchableOpacity>
        {/* <Image source={require('../assets/setting/btn_back.png')} style={{bottom: 230,left: 20}}/> */}
      </TouchableOpacity>
       <View style={styles.center}>
        <View style={styles.bg_personal_form}>
          <View style={styles.personal_form}>
            <Image source={require('../assets/setting/big_icon-profile.png')}/>
            <TouchableOpacity>
              <Image source={require('../assets/setting/btn_about_edit.png')} style={{bottom: 30,left: 30}}/>
            </TouchableOpacity>
            <Text style={styles.text_personal_form}>Sandy</Text>
            <TouchableOpacity>
              <Image source={require('../assets/setting/btn_about_edit.png')} style={{bottom: 18,left: 40}}/>
            </TouchableOpacity>
            <Text style={styles.text_personal_form}>開始日期：2021 / 4 / 9</Text>
          </View>
          <View style={styles.setting}>
            <TouchableOpacity>
              <Text style={{marginBottom: 40,marginTop:40,fontWeight: 'bold',fontSize: 16,color:'#909090'}}>語言</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{marginBottom: 40,fontWeight: 'bold',fontSize: 16,color:'#909090'}}>提醒</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{marginBottom: 40,fontWeight: 'bold',fontSize: 16,color:'#909090'}}>備份</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{marginBottom: 40,fontWeight: 'bold',fontSize: 16,color:'#909090'}}>Q & A</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{marginBottom: 40,fontWeight: 'bold',fontSize: 16,color:'#909090'}}>聯絡我們</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{marginBottom: 40,fontWeight: 'bold',fontSize: 16,color:'#909090'}}>版本資訊</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bg_personal_form: {
    width: 320,
    height: 590,
    marginTop: -80,
    backgroundColor: '#63CFA8',
    alignItems: 'center',
    bottom: 50,
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3, },
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
    color: 'white',
    paddingTop: 5,
  },
  setting: {
    backgroundColor: '#fff',
    width: 320,
    height: 430,
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 6,
  }
});
