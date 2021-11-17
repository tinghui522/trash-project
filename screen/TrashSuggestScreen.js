import React, { Component ,useState,navigation }from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity } from 'react-native';


export default class TrashSuggestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'suggest'};
  }

  render(){
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.bg}>
        <View style={styles.header}>
          <Image source= {require('../assets/suggest/header-bg.png')} 
                style= {{ height: 275 }}/>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
                style={styles.profileiconStyle}
                source={require('../assets/icon-profile.png')}
                />
          </TouchableOpacity>
          <Text style={styles.headerText}>統計分析</Text>
          <TabNavigator>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'suggest'}
              title="垃圾量"
              renderIcon={() => <Image style={styles.btnimage} source={require('../assets/suggest/btn-trashSuggest.png')} />}
              renderSelectedIcon={() => <Image style={styles.btnimage2} source={require('../assets/suggest/btn-trashOnTouch.png')} />}
              onPress={() => this.setState({ selectedTab: 'suggest' })}>
              <View style={styles.page1}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'money'}
              title="食物費"
              renderIcon={() => <Image style={styles.btnimage3} source={require('../assets/suggest/btn-moneySuggest.png')} />}
              renderSelectedIcon={() => <Image style={styles.btnimage4} source={require('../assets/suggest/btn-moneyOnTouch.png')} />}
              onPress={() => this.setState({ selectedTab: 'money' })}>
              <View style={styles.page2}></View>
            </TabNavigator.Item>
          </TabNavigator>
        </View>
        <View style={styles.container}>
          <View style={styles.chart}>
            <Image source= {require('../assets/suggest/statistics-chart.png')}/>
          </View>
          <View style={styles.trashSuggest}>
              <Text style={styles.suggestText}>五月已累積丟了___</Text>
              <View style={styles.dashLine} />
              <Text style={styles.suggestText}>建議區</Text>
              <View style={styles.suggestCharacter}>
                <Image source= {require('../assets/suggest/character_Earth.png')} 
                      style ={{ width: 167, height: 167 }}/>
              </View>
          </View>
        </View>
        <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bg:{
    width:414,
    height:896,
    backgroundColor:'#E5E5E5',
  },
  header: {
    height: 273,
  },
  headerText: {
    color: '#909090',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: -190,
    marginLeft: 50,
  },
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:325,
    marginTop:-230
  },
  btnimage:{
    marginLeft: 75,
    marginTop: -120,
  },
  btnimage2:{
    marginLeft: 45,
    zIndex:10,
    marginTop: -120,
  },
  btnimage3:{
    marginLeft: -74,
    marginTop: -120,
  },
  btnimage4:{ 
    marginLeft: -44,
    zIndex:99,
    marginTop: -120,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  chart: {
    backgroundColor: '#fff',
    width: 365,
    height: 337,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -70,
  },
  trashSuggest: {
    backgroundColor: '#fff',
    width: 365,
    height: 540,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    marginTop: 50,
    bottom:30,
  },
  suggestText: {
    color: '#909090',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
    marginLeft: 30,
  },
  dashLine: {
    marginTop: 200,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#35A67D',
  },
  suggestCharacter: {
    marginTop: 80,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
