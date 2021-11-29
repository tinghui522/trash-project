import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';

import { TrashcanStack, TrashSuggestStack, MonthStack, GoalStack } from '../screen';
const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color,size }) => {
          let iconPath;
          let iconWidth;
          let iconHeight;
          let iconSize;

          if (route.name === '首頁') {
            iconPath = focused
            ? require('../assets/btn-homeOntouch.png'):
            require('../assets/btn-home.png') ;
            iconWidth = focused ? 35 : 35;
            iconHeight = focused ? 42 : 42;
          } else if (route.name === '分析') {
            iconPath = focused
            ? require('../assets/btn-trendOntouch.png'):
            require('../assets/btn-trend.png');
            iconWidth = focused ? 37 : 37;
            iconHeight = focused ? 35 : 35;
          }else if (route.name == '月曆') {
            iconPath = focused
            ? require('../assets/btn-monthOntouch.png'):
            require('../assets/btn-month.png');
            iconWidth = focused ? 35 : 35;
            iconHeight = focused ? 35 : 35;
          }else if (route.name == '目標') {
            iconPath = focused
            ? require('../assets/btn-goalOntouch.png'):
            require('../assets/btn-goal.png');
            iconWidth = focused ? 24 : 24;
            iconHeight = focused ? 36 : 36;
          }

          // You can return any component that you like here!
          return (
            <Image 
              style={{width: iconWidth, height: iconHeight, marginTop: 20,}}
              source={iconPath} 
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#707070',
        showLabel:false,
        style: {
          position:'absolute',
          height:90,
          backgroundColor:"#fff",
          borderRadius: 30,
          borderWidth: 1,
          borderColor:'#D9D9D9',
        },
      }}
    ><Tab.Screen name="首頁" component={TrashcanStack}
    options={props => {
      return {
        tabBarVisible: !props.route.state || props.route.state.index === 0,
      };
    }}
    />
    <Tab.Screen name="分析" component={TrashSuggestStack}
      options={props => {
        return {
          tabBarVisible: !props.route.state || props.route.state.index === 0,
        };
      }} />
    <Tab.Screen name="月曆" component={MonthStack}
      options={props => {
        return {
          tabBarVisible: !props.route.state || props.route.state.index === 0 ,
        };
      }} />
    <Tab.Screen name="目標" component={GoalStack}
      options={props => {
        return {
          tabBarVisible: !props.route.state || props.route.state.index === 0 ,
        };
      }} />
  </Tab.Navigator>
);
};

export default HomeTabNavigation;