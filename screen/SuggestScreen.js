import React, { Component , useState, navigation }from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { VictoryPie } from 'victory-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";

export default class SuggestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'suggest'};
  }

  trashChart() {
    return (
      <View>
      <VictoryPie 
        data={[
          { x: "餐盒", y: 12.5 },
          { x: "筷子", y: 12.5 },
          { x: "吸管", y: 25 },
          { x: "杯子", y: 25 },
          { x: "袋子", y: 25 }
        ]}
        colorScale={["#FFDF42", "#B78059", "#68B539", "#4A8A77", "#FFB1C2" ]}
        labels={({ datum }) => `${datum.y}%`}
        labelRadius={({ innerRadius }) => innerRadius + 5 }
        labelPlacement={({ index }) => index
          ? "parallel"
          : "vertical"
        }
        radius={150}
        innerRadius={110}
        style={{
          labels: {fill: Colors.white}
        }}
      />
      <View style={styles.chartText}>
        <Text style={{ fontWeight: 'bold', fontSize: 48, color: '#63CFA8'}}>16</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#909090' }}>件</Text>
      </View>
    </View>
    )
  }

  moneyChart() {
    return (
      <View>
      <VictoryPie 
        data={[
          { x: "早餐", y: 12 },
          { x: "午餐", y: 32 },
          { x: "晚餐", y: 48 },
          { x: "飲料", y: 8 },
        ]}
        colorScale={["#FFDF42", "#B78059", "#68B539", "#4A8A77" ]}
        labels={({ datum }) => `${datum.y}%`}
        labelRadius={({ innerRadius }) => innerRadius + 5 }
        labelPlacement={({ index }) => index
          ? "parallel"
          : "vertical"
        }
        radius={150}
        innerRadius={110}
        style={{
          labels: {fill: Colors.white}
        }}
      />
      <View style={styles.chartText}>
        <Text style={{ fontWeight: 'bold', fontSize: 48, color: '#63CFA8', marginLeft: -30}}>2500</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#909090' }}>元</Text>
      </View>
    </View>
    )
  }

  suggestPage = () => (
    <View style={{alignItems: 'center'}}>
      <View style={styles.panel}>
        <View style={styles.panelContent}>
          <TouchableOpacity 
            onPress={() => this.bs.current.snapTo(1)}
            style={{ marginTop: -25, marginLeft: 250 }}>
            <Image source={require('../assets/suggest/btn_closeModal.png')}
                  style={{ width: 35, height: 35}}/>
          </TouchableOpacity>
          <Image source={require('../assets/suggest/img_alert.png')} 
                style={{ marginTop: -15, width: 175, height: 175}}/>
          <Text style={styles.alertText}>頁面建置中</Text>
        </View>
      </View>
    </View>
  )

  bs = React.createRef();
  fall = new Animated.Value(1);

  render(){
    const { navigation } = this.props;
    return (
      <ScrollView>
        <Animated.View style={{ height: 1380, opacity: Animated.add(0.3, Animated.multiply(this.fall, 0.8)) }}>
        <View>
          <Image source= {require('../assets/suggest/header-bg.png')} 
                style= {{ height: 275 }}/>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{zIndex:10}}>
            <Image
                style={styles.profileiconStyle}
                source={require('../assets/icon-profile.png')}
                />
          </TouchableOpacity>
          <Text style={styles.headerText}>統計分析</Text>
          <View style={{ marginTop: 90}}>
            <TabNavigator tabBarStyle={styles.tab}>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'suggest'}
                renderIcon={() => <Image style={styles.btnimage} source={require('../assets/suggest/btn-trashSuggest.png')} />}
                renderSelectedIcon={() => <Image style={styles.btnimage2} source={require('../assets/suggest/btn-trashOnTouch.png')} />}
                onPress={() => this.setState({ selectedTab: 'suggest' })}>
                <View style={styles.container}>
                  <View style={styles.chart}>
                    <Text style={styles.chartTitle}>垃圾排放</Text>
                    <Image source= {require('../assets/suggest/statistics-chart.png')} style= {{ width: 280, height: 190 }}/>
                  </View>
                  <View style={styles.trashSuggest}>
                      <Text style={styles.suggestText}>五月已累積</Text>
                      <View style={styles.pieChart}>
                        <this.trashChart></this.trashChart>
                      </View>
                      <View style={styles.suggestContent}>
                        <View style={{ width: 150 }}>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                            <View style={{ backgroundColor: '#FFDF42', width: 15, height: 15, borderRadius: 10, marginRight: 10}}/>
                            <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 18 }}>
                              餐盒 2件</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                            <View style={{ backgroundColor: '#B78059', width: 15, height: 15, borderRadius: 10, marginRight: 10}}/>
                            <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 18 }}>
                              筷子 2件</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                            <View style={{ backgroundColor: '#68B539', width: 15, height: 15, borderRadius: 10, marginRight: 10}}/>
                            <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 18 }}>
                              吸管 4件</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                            <View style={{ backgroundColor: '#4A8A77', width: 15, height: 15, borderRadius: 10, marginRight: 10}}/>
                            <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 18 }}>
                              杯子 4件</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                            <View style={{ backgroundColor: '#FFB1C2', width: 15, height: 15, borderRadius: 10, marginRight: 10}}/>
                            <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 18 }}>
                              袋子 4件</Text>
                          </View>
                        </View>
                        <View>
                          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                            <Image source={require('../assets/suggest/btn_clickMe.png')}
                                  style={{ width: 95, height: 46, marginLeft: 35, marginBottom: -10}}/>
                          </TouchableOpacity>
                          <Image source= {require('../assets/suggest/character_Earth.png')} 
                                style={{ width: 167, height: 167 }}/>
                        </View>
                      </View>
                  </View>
                </View>
              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'money'}
                renderIcon={() => <Image style={styles.btnimage3} source={require('../assets/suggest/btn-moneySuggest.png')} />}
                renderSelectedIcon={() => <Image style={styles.btnimage4} source={require('../assets/suggest/btn-moneyOnTouch.png')} />}
                onPress={() => this.setState({ selectedTab: 'money' })}>
                <View style={styles.container}>
                  <View style={styles.chart}>
                    <Text style={styles.chartTitle}>食物費用</Text>
                    <Image source= {require('../assets/suggest/money-chart.png')} style= {{ width: 285, height: 190 }}/>
                  </View>
                  <View style={styles.moneySuggest}>
                      <Text style={styles.suggestText}>五月已花費</Text>
                      <View style={styles.pieChart}>
                        <this.moneyChart></this.moneyChart>
                      </View>
                      <View style={styles.suggestContent}>
                        <View style={{ width: 150 }}>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                            <View style={{ backgroundColor: '#FFDF42', width: 15, height: 15, borderRadius: 10, marginRight: 10}}/>
                            <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 18 }}>
                              早餐 300元</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                            <View style={{ backgroundColor: '#B78059', width: 15, height: 15, borderRadius: 10, marginRight: 10}}/>
                            <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 18 }}>
                              中餐 800元</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                            <View style={{ backgroundColor: '#68B539', width: 15, height: 15, borderRadius: 10, marginRight: 10}}/>
                            <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 18 }}>
                              晚餐 1200元</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                            <View style={{ backgroundColor: '#4A8A77', width: 15, height: 15, borderRadius: 10, marginRight: 10}}/>
                            <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 18 }}>
                              飲料 200元</Text>
                          </View>
                        </View>
                        <View>
                          <Image source= {require('../assets/suggest/character_Earth.png')} 
                                style={{ width: 167, height: 167, marginTop: 15 }}/>
                        </View>
                      </View>
                  </View>
                </View>
              </TabNavigator.Item>
            </TabNavigator>
          </View>
        </View>
        </Animated.View>
        <BottomSheet
          ref={this.bs}
          snapPoints={[600, 0]}
          renderContent={this.suggestPage}
          initialSnap={1}
          callbackNode={this.fall}
          enabledGestureInteraction={true}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    height: 890,
  },
  headerText: {
    color: '#909090',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: -165,
    marginLeft: 50,
  },
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:325,
    marginTop:-230,
    zIndex: 100,
  },
  tab:{
    height: 232,
    backgroundColor: 'transparent',
  },
  btnimage:{
    marginLeft: 75,
  },
  btnimage2:{
    marginLeft: 45,
    zIndex:10,
  },
  btnimage3:{
    marginLeft: -74,
  },
  btnimage4:{ 
    marginLeft: -44,
    zIndex:99,
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
    marginTop: 20,
  },
  chartTitle: {
    color: '#909090',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: -200,
    marginBottom: 40,
  },
  trashSuggest: {
    backgroundColor: '#fff',
    width: 365,
    height: 670,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    marginTop: 50,
    bottom:30,
  },
  moneySuggest: {
    backgroundColor: '#fff',
    width: 365,
    height: 650,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    marginTop: 50,
    bottom:30,
  },
  suggestText: {
    color: '#909090',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    marginLeft: 30,
  },
  chartText: {
    flexDirection: 'row',
    position: 'absolute', 
    top: '42%',
    left: '42%', 
    alignItems: 'baseline',
    marginLeft: 15,
  },
  pieChart: {
    alignItems: 'center',
  },
  suggestContent: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 30
  },
  panel: {
    width: 385,
    height: 325,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  panelContent: {
    width: 315,
    height: 260,
    borderStyle: 'dashed',
    borderColor: '#63CFA8',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alertText: {
    color: '#909090',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
