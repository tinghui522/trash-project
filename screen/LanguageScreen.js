import React , { Component, Fragment }from 'react';
import { TouchableOpacity,StyleSheet, Text, View ,Image} from 'react-native';

export default function LanguageScreen() {
  const [isPress, setIsPress] = React.useState();
  return (
    <View style={styles.setting}>
      <View style={styles.content}>
        <Image source={require('../assets/setting/language.png')} style={{ width: 80, height: 80 }}/>
        <Text style={styles.title}>語言</Text>
        <TouchableOpacity>
          <View style={styles.btn_cn}>
            <Text style={styles.cnText}>繁體中文</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btn_en}>
            <Text style={styles.enText}>English</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  setting:{
    backgroundColor: '#fff',
    width: 320,
    height: 480,
    marginTop:130,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    justifyContent: 'center'
  },
  content:{
    height: 320,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title:{
    fontSize:22,
    fontWeight: 'bold',
    color: '#909090',
    marginBottom: 10
  },
  btn_cn:{
    width:130,
    height:50,
    backgroundColor: '#63CFA8',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cnText:{
    fontSize:20,
    fontWeight:"bold",
    color: '#fff',
  },
  btn_en:{
    width:130,
    height:50,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderColor: '#E3E3E3',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enText: {
    fontSize:20,
    fontWeight:"bold",
    color: '#909090',
  }
});