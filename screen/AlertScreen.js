import React , { Component, Fragment }from 'react';
import { TouchableOpacity,StyleSheet, Text, View ,Image} from 'react-native';
export default  AlertScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
        <View style={styles.center}>
        <View style={styles.topbg}>
        <Text style={styles.title}>設定</Text>
        </View>
        <View style={styles.bg_personal_form}>
            <View style={styles.setting}>
                <TouchableOpacity onPress={() => navigation.goback()}>
                    <Image source={require('../assets/setting/btn_back.png')} style={{left: 30,top:40}}/>
                </TouchableOpacity>
            
            </View>
        </View>
        </View>
    </SafeAreaView>
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
    height:132,
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
});