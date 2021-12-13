import { StatusBar } from 'expo-status-bar';
import React , { Component }from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View ,Image, Modal, Animated} from 'react-native';
import LanguageScreen from './LanguageScreen';
import AlertScreen from './AlertScreen';
import MailScreen from './MailScreen';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal ] = React.useState(visible);
  const scalValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible])
  const toggleModal =() => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scalValue,{
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200)
      Animated.timing(scalValue,{
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return(
    <Modal transparent visible={showModal}>
      <View style={styles.modalBg}>
        <Animated.View style={[styles.modalContainer,{transform:[{scale:scalValue}]}]}>{children}</Animated.View>
      </View>
    </Modal>
  )
}

export default function AboutScreen({ navigation }) {
  const [languageVisible, setLanguageVisible] = React.useState(false);
  const [alertVisible, setAlertVisible] = React.useState(false);
  const [mailVisible, setmailVisible] = React.useState(false);
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
            <ModalPoup visible={languageVisible}>
              <LanguageScreen></LanguageScreen>
              <TouchableOpacity onPress={() => setLanguageVisible(false)}>
                <Image source={require('../assets/setting/btn_back.png')} style={{left: 30,top:-440}}/>
              </TouchableOpacity> 
            </ModalPoup>
            <TouchableOpacity onPress={() => setLanguageVisible(true)}>
              <Image source={require('../assets/setting/language.png')} style={{width:35,height:35,top: 50,left: 15}}/>
              <Text style={{marginBottom: 20,marginTop:20,marginLeft:60,fontWeight: 'bold',fontSize: 20,color:'#909090'}}>語言</Text>
              <Image source={require('../assets/setting/arrow.png')} style={{width:16,height:18,marginLeft: 275,marginTop:-35}}/>
            </TouchableOpacity>
            <View style={styles.underline}/>
            
            <ModalPoup visible={alertVisible}>
              <AlertScreen></AlertScreen>
              <TouchableOpacity onPress={() => setAlertVisible(false)}>
                <Image source={require('../assets/setting/btn_back.png')} style={{left: 30,top:-440}}/>
              </TouchableOpacity> 
            </ModalPoup>
            <TouchableOpacity onPress={() => setAlertVisible(true)}>
              <Image source={require('../assets/setting/alert.png')} style={{width:35,height:35,top: 15,left: 15}}/>
              <Text style={{marginTop: -15,marginLeft:60,fontWeight: 'bold',fontSize: 20,color:'#909090'}}>提醒</Text>
              <Image source={require('../assets/setting/arrow.png')} style={{width:16,height:18,marginLeft: 275,marginTop:-20}}/>
            </TouchableOpacity>
            <View style={styles.underline}/>

            <ModalPoup visible={mailVisible}>
              <MailScreen></MailScreen>
              <TouchableOpacity onPress={() => setmailVisible(false)}>
                <Image source={require('../assets/setting/btn_back.png')} style={{left: 30,top:-440}}/>
              </TouchableOpacity> 
            </ModalPoup>
            <TouchableOpacity onPress={() => setmailVisible(true)}>
              <Image source={require('../assets/setting/contact.png')} style={{width:35,height:35,top: 15,left: 15}}/>
              <Text style={{marginTop:-15,marginLeft:60,fontWeight: 'bold',fontSize: 20,color:'#909090'}}>聯絡我們</Text>
              <Image source={require('../assets/setting/arrow.png')} style={{width:16,height:18,marginLeft: 275,marginTop:-20}}/>
            </TouchableOpacity>
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
    marginTop:80,
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
  },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    marginTop: 40,
  },
});