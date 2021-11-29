import React, { Component ,useState, navigation }from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity } from 'react-native';

export default class TrashSuggestScreen extends Component {
  render(){
    const { navigation } = this.props;
    // constructor(props) {
    //   super(props);
    //   this.state = {selectedTab: 'suggest'};
    // }
  return (
    <ScrollView>
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
          <Image source= {require('../assets/suggest/money-chart.png')}/>
        </View>

        <View style={styles.moneySuggest}>
            <Text style={styles.suggestText}>小提醒</Text>
            <View style={styles.suggestCharacter}>
              <Image source= {require('../assets/suggest/character_Earth.png')} 
                    style ={{ width: 167, height: 167 }}/>
            </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 275,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -150,
    marginLeft: 50,
  },
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:325,
    marginTop:-200
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  chart: {
    backgroundColor: '#fff',
    width: 365,
    height: 337,
    borderRadius: 20,
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3,},
    shadowOpacity: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  },
  moneySuggest: {
    backgroundColor: '#fff',
    width: 365,
    height: 300,
    borderRadius: 20,
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3,},
    shadowOpacity: 6,
    marginTop: 50,
  },
  suggestText: {
    color: '#909090',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
    marginLeft: 30,
  },
  suggestCharacter: {
    marginTop: 80,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
