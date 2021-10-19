import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { Image } from 'react-native';
import TrashSuggestScreen from './screen/TrashSuggestScreen';
import TrashcanScreen from "./screen/TrashcanScreen";
import MonthScreen from "./screen/MonthScreen";
import GoalScreen from './screen/GoalScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        style:{
          backgroundColor:'#fff',
          height:120,
        }
      }}>
      <Tab.Screen
        name="Home"
        component={TrashcanScreen}
        options={{
          tabBarIcon: ({ focused }) => (
          focused
            ? <Image source={require('./assets/btn-home.png')} style={{height:40,width:80 }}  />
            : <Image source={require('./assets/icon-home.png')} style={{height:30,width:30 }}  />
          )
        }}
      />
      <Tab.Screen
        name="TrashSuggest"
        component={TrashSuggestScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <Image source={require('./assets/btn-trend.png')} style={{height:40,width:80 }}  />
              : <Image source={require('./assets/icon-trend.png')} style={{height:30,width:30 }}  />
            )
        }}
      />

      <Tab.Screen
        name="Month"
        component={MonthScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <Image source={require('./assets/btn-month.png')} style={{height:40,width:80 }}  />
              : <Image source={require('./assets/icon-month.png')} style={{height:30,width:30 }}  />
            )
        }}
      />
      <Tab.Screen
        name="Goal"
        component={GoalScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <Image source={require('./assets/btn-goal.png')} style={{height:40,width:80 }}  />
              : <Image source={require('./assets/icon-goal.png')} style={{height:30,width:30 }}  />
            )
        }}
      />
    </Tab.Navigator>
  );
}