import { StatusBar } from 'expo-status-bar';
import React , { Component, navigation }from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Modal from 'react-native-modal';
import LanguageScreen from './LanguageScreen';
import ReminderScreen from './ReminderScreen';
import ContactScreen from './ContactScreen';

const state = {
  isModalVisible: false,
}

const languageModal = () => {
  this.setState({isModalVisible:!this.state.isModalVisible})
}

const reminderModal = () => {
  this.setState({isModalVisible:!this.state.isModalVisible})
}

const contactModal = () => {
  this.setState({isModalVisible:!this.state.isModalVisible})
}

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.center}>
      <View style={styles.topbg}>
        {/* <TouchableOpacity onPress={() => navigation.goback()}>
          <Image source={require('../assets/setting/btn_back.png')} style={{left: 30,top:40}}/>
        </TouchableOpacity> */}
        <Text style={styles.title}>設定</Text>
      </View>
        <View style={styles.bg_personal_form}>
          <View style={styles.setting}>
            <TouchableOpacity onPress={languageModal}>
              <Image source={require('../assets/setting/language.png')} style={{width:35,height:35,top: 50,left: 15}}/>
              <Text style={{marginBottom: 20,marginTop:20,marginLeft:60,fontWeight: 'bold',fontSize: 20,color:'#909090'}}>語言</Text>
              <Image source={require('../assets/setting/arrow.png')} style={{width:16,height:18,marginLeft: 275,marginTop:-35}}/>
            </TouchableOpacity>
            <Modal isVisible={state.isModalVisible} style={{ marginTop: 70, marginLeft: 48 }}>
              <LanguageScreen></LanguageScreen>
              <TouchableOpacity onPress={languageModal}>
                <Image source={require('../assets/setting/btn_back.png')} style={{left: 30,top:-440}}/>
              </TouchableOpacity> 
            </Modal>
            <View style={styles.underline}/>
            
            <TouchableOpacity onPress={reminderModal}>
              <Image source={require('../assets/setting/alert.png')} style={{width:35,height:35,top: 15,left: 15}}/>
              <Text style={{marginTop: -15,marginLeft:60,fontWeight: 'bold',fontSize: 20,color:'#909090'}}>提醒</Text>
              <Image source={require('../assets/setting/arrow.png')} style={{width:16,height:18,marginLeft: 275,marginTop:-20}}/>
            </TouchableOpacity>
            <Modal isVisible={state.isModalVisible} style={{ marginTop: 70, marginLeft: 48 }}>
              <ReminderScreen></ReminderScreen>
              <TouchableOpacity onPress={reminderModal}>
                <Image source={require('../assets/setting/btn_back.png')} style={{left: 30,top:-440}}/>
              </TouchableOpacity> 
            </Modal>
            <View style={styles.underline}/>

            <TouchableOpacity onPress={contactModal}>
              <Image source={require('../assets/setting/contact.png')} style={{width:35,height:35,top: 15,left: 15}}/>
              <Text style={{marginTop:-15,marginLeft:60,fontWeight: 'bold',fontSize: 20,color:'#909090'}}>聯絡我們</Text>
              <Image source={require('../assets/setting/arrow.png')} style={{width:16,height:18,marginLeft: 275,marginTop:-20}}/>
            </TouchableOpacity>
            <Modal isVisible={state.isModalVisible} style={{ marginTop: 70, marginLeft: 48 }}>
              <ContactScreen></ContactScreen>
              <TouchableOpacity onPress={contactModal}>
                <Image source={require('../assets/setting/btn_back.png')} style={{left: 30,top:-440}}/>
              </TouchableOpacity> 
            </Modal>
            <View style={styles.underline}/>

              <Image source={require('../assets/setting/about.png')} style={{width:35,height:35,top: 15,left: 15}}/>
              <Text style={{marginTop:-15,marginLeft:60,fontWeight: 'bold',fontSize: 20,color:'#909090'}}>版本資訊</Text>
              <Text style={{marginTop:-20,marginLeft:260,fontSize: 20,color:'#909090'}}>1.0.0</Text>
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    width:415,
    height:896,
  },
  topbg:{
    width:414,
    height:140,
    backgroundColor: '#63CFA8',
    borderRadius: 20,
    borderWidth:1,
    borderColor:'#D9D9D9',
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
    color: 'white',
    marginTop:50,
    marginLeft:185,
  },
  bg_personal_form: {
    width: 320,
    height: 550,
    top: 55,
    backgroundColor: '#63CFA8',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
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
    height: 480,
    marginTop:80,
    alignItems:'flex-start',
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
  },
  underline: {
    marginTop:15,
    marginBottom:15,
    width:300,
    height:1,
    backgroundColor:"#C7C7C7",
    left:10,
  }
});