import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View , Image, Switch} from 'react-native';

export default function AlertScreen() {
  const [recordIsEnabled, setRecordIsEnabled] = React.useState(false);
  const [tablewareIsEnabled, setTablewareIsEnabled] = React.useState(false);
  const recordSwitch = () => setRecordIsEnabled(previousState => !previousState);
  const tablewareSwitch = () => setTablewareIsEnabled(previousState => !previousState);
  return (
    <View style={styles.setting}>
      <View style={styles.content}>
        <Image source={require('../assets/setting/alert.png')} style={{ width: 80, height: 80 }}/>
        <Text style={styles.title}>提醒</Text>
        <TouchableOpacity>
          <View style={styles.alertContainer}>
            <Text style={styles.setText}>每日記錄提醒</Text>
            <Switch
              trackColor={{ false: "#F6F6F6", true: "#ABE8D2" }}
              thumbColor={recordIsEnabled ? "#63CFA8" : "#63CFA8"}
              tintColor="#F6F6F6"
              onValueChange={recordSwitch}
              value={recordIsEnabled}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.alertContainer}>
            <Text style={styles.setText}>環保餐具提醒</Text>
            <Switch
              trackColor={{ false: "#F6F6F6", true: "#ABE8D2" }}
              thumbColor={tablewareIsEnabled ? "#63CFA8" : "#63CFA8"}
              tintColor="#F6F6F6"
              onValueChange={tablewareSwitch}
              value={tablewareIsEnabled}
            />
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
    height: 280,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title:{
    fontSize:22,
    fontWeight: 'bold',
    color: '#909090',
    marginBottom: 50
  },
  alertContainer:{
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: -5,
  },
  setText:{
    fontSize:20,
    fontWeight:"bold",
    color: '#909090',
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