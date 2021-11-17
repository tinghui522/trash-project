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
              <Image source={require('../assets/setting/language.png')} style={{width:35,height:35,top: 30,left: 15}}/>
              <Text style={{marginBottom: 20,marginTop:3,marginLeft:60,fontWeight: 'bold',fontSize: 16,color:'#909090'}}>語言</Text>
              <Image source={require('../assets/setting/arrow.png')} style={{width:16,height:18,marginLeft: 275,marginTop:-35}}/>
            </TouchableOpacity>
            <View style={styles.underline}/>
            <TouchableOpacity>
              <Image source={require('../assets/setting/alert.png')} style={{width:35,height:35,top: 15,left: 15}}/>
              <Text style={{marginTop: -10,marginLeft:60,fontWeight: 'bold',fontSize: 16,color:'#909090'}}>提醒</Text>
              <Image source={require('../assets/setting/arrow.png')} style={{width:16,height:18,marginLeft: 275,marginTop:-20}}/>
            </TouchableOpacity>
            <View style={styles.underline}/>
            <TouchableOpacity>
              <Image source={require('../assets/setting/file.png')} style={{width:35,height:35,top:15,left: 15}}/>
              <Text style={{marginTop:-10,marginLeft:60,fontWeight: 'bold',fontSize: 16,color:'#909090'}}>備份</Text>
              <Image source={require('../assets/setting/arrow.png')} style={{width:16,height:18,marginLeft: 275,marginTop:-20}}/>
            </TouchableOpacity>
            <View style={styles.underline}/>
            <TouchableOpacity>
              <Image source={require('../assets/setting/question.png')} style={{width:35,height:35,top: 15,left: 15}}/>
              <Text style={{marginTop:-10,marginLeft:60,fontWeight: 'bold',fontSize: 16,color:'#909090'}}>常見問題</Text>
              <Image source={require('../assets/setting/arrow.png')} style={{width:16,height:18,marginLeft: 275,marginTop:-20}}/>
            </TouchableOpacity>
            <View style={styles.underline}/>
            <TouchableOpacity>
              <Image source={require('../assets/setting/contact.png')} style={{width:35,height:35,top: 15,left: 15}}/>
              <Text style={{marginTop:-10,marginLeft:60,fontWeight: 'bold',fontSize: 16,color:'#909090'}}>聯絡我們</Text>
              <Image source={require('../assets/setting/arrow.png')} style={{width:16,height:18,marginLeft: 275,marginTop:-20}}/>
            </TouchableOpacity>
            <View style={styles.underline}/>
              <Image source={require('../assets/setting/about.png')} style={{width:35,height:35,top: 15,left: 15}}/>
              <Text style={{marginTop:-10,marginLeft:60,fontWeight: 'bold',fontSize: 16,color:'#909090'}}>版本資訊</Text>
              <Text style={{marginTop:-20,marginLeft:270,fontSize: 16,color:'#909090'}}>1.0</Text>
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
    height: 575,
    top: -95,
    backgroundColor: '#63CFA8',
    alignItems: 'center',
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
  },
  setting: {
    backgroundColor: '#fff',
    width: 320,
    height: 420,
    marginTop:-20,
    alignItems:'flex-start',
    borderRadius: 20,
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 6,
  },
  underline: {
    marginTop:20,
    width:300,
    height:1,
    backgroundColor:"#C7C7C7",
    left:10,
  }
});
