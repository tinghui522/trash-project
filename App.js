import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image , AsyncStorageStatic, AppRegistry } from 'react-native';
import { SplashScreen } from 'expo';

import SuggestScreen from './screen/SuggestScreen';
import RecordScreen from './screen/RecordScreen';
import TrashcanScreen from "./screen/TrashcanScreen";
import MonthScreen from "./screen/MonthScreen";
import GoalScreen from './screen/GoalScreen';
import AboutScreen from './screen/AboutScreen';

const Tab = createBottomTabNavigator();
const PERSISTENCE_KEY = "NAVIGATION_STATE";

const Stack = createStackNavigator();
function HomeStack () {
  return (
      
      <Stack.Navigator>
       <Stack.Screen name=" "component={TrashcanScreen}  
        options={{
          headerStyle:{
            height:0,
          }
        }} />  
        <Stack.Screen name="Record" component={RecordScreen} />
        <Stack.Screen name="Profile" component={AboutScreen} />
      </Stack.Navigator>
  );
}

const StackSuggest = createStackNavigator();
function SuggestStack () {
  return(
    <StackSuggest.Navigator>
      <StackSuggest.Screen name=" "component={SuggestScreen}  
        options={{
          headerStyle:{
            height:0,
          }
        }} />  
      <Stack.Screen name="Profile" component={AboutScreen} />
    </StackSuggest.Navigator>
  );
}

const StackMonth = createStackNavigator();
function MonthStack () {
  return (
      
      <StackMonth.Navigator>
       <StackMonth.Screen name=" "component={MonthScreen}  
        options={{
          headerStyle:{
            height:0,
          }
        }} />  
        <StackMonth.Screen name="Profile" component={AboutScreen} />
      </StackMonth.Navigator>
  );
}

const StackGoal = createStackNavigator();
function GoalStack () {
  return (
      
      <StackGoal.Navigator>
       <StackGoal.Screen name=" "component={GoalScreen}  
        options={{
          headerStyle:{
            height:0,
          }
        }} />  
        <Stack.Screen name="Profile" component={AboutScreen} />
      </StackGoal.Navigator>
  );
}

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
    <NavigationContainer 
        initialState={initialNavigationState}
        onStateChange={(state)=>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
      //底部選單
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconPath;

            if (route.name === '首頁') {
              iconPath = focused
              ? require('./assets/btn-home.png'):
              require('./assets/icon-home.png');
            } else if (route.name === '分析') {
              iconPath = focused
              ? require('./assets/btn-trend.png'):
              require('./assets/icon-trend.png');
            }else if (route.name == '月曆') {
              iconPath = focused
              ? require('./assets/btn-month.png'):
              require('./assets/icon-month.png');
            }else if (route.name == '目標') {
              iconPath = focused
              ? require('./assets/btn-goal.png'):
              require('./assets/icon-goal.png');
            }

            // You can return any component that you like here!
            return (
              <Image 
                style={{width: 35, height: 35}}
                source={iconPath} 
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#13EBAB',
          inactiveTintColor: '#FFFFFF',
          labelStyle: {
            fontSize: 13,
            marginTop: -3,
            padding: 0,
            fontWeight:"600"
          },
          style:{height:120,backgroundColor:"#fff"}
          
        }}
        
      >
        <Tab.Screen name="首頁" component={HomeStack} />
        <Tab.Screen name="分析" component={SuggestStack} />
        <Tab.Screen name="月曆" component={MonthStack} />
        <Tab.Screen name="目標" component={GoalStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

}

export default App;