import React from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TrashSuggestScreen from './screen/TrashSuggestScreen';
import MoneySuggestScreen from './screen/MoneySuggestScreen';
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
            },
          }} />  
        <Stack.Screen name="Record" component={RecordScreen} 
          options={{
            headerStyle:{
              height:0,
            },
            headerLeft: null,
          }} />
        <Stack.Screen name="Profile" component={AboutScreen}
          options={{
            headerStyle:{
              height:0,
            },
            headerLeft: null,
          }} /> 
      </Stack.Navigator>
  );
}

const StackSuggest = createStackNavigator();
function SuggestStack () {
  return(
    <StackSuggest.Navigator>
      <StackSuggest.Screen name="TrashSuggest"component={TrashSuggestScreen}  
        options={{
          headerStyle:{
            height:0,
          }
        }} />  
      <Stack.Screen name="Profile" component={AboutScreen} 
        options={{
          headerStyle:{
            height:0,
          },
          headerLeft: null,
        }} />
      <Stack.Screen name="MoneySuggest" component={MoneySuggestScreen} 
        options={{
          headerStyle:{
            height:0,
          }
        }} />  
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
        <Stack.Screen name="Profile" component={AboutScreen} 
          options={{
            headerStyle:{
              height:0,
            },
            headerLeft: null,
          }} />
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
        <Stack.Screen name="Profile" component={AboutScreen} 
          options={{
            headerStyle:{
              height:0,
            },
            headerLeft: null,
          }} />
      </StackGoal.Navigator>
  );
}

export default function App() {
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
      >
      <Tab.Navigator
        initialRouteName="trash"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color,size }) => {
            let iconPath;
            let iconWidth;
            let iconHeight;

            if (route.name === '首頁') {
              iconPath = focused
              ? require('./assets/btn-home.png'):
              require('./assets/icon-home.png') ;
              iconWidth = focused ? 80 : 30;
              iconHeight = focused ? 40 : 30;
            } else if (route.name === '分析') {
              iconPath = focused
              ? require('./assets/btn-trend.png'):
              require('./assets/icon-trend.png');
              iconWidth = focused ? 100 : 30;
              iconHeight = focused ? 40 : 30;
            }else if (route.name == '月曆') {
              iconPath = focused
              ? require('./assets/btn-month.png'):
              require('./assets/icon-month.png');
              iconWidth = focused ? 80 : 30;
              iconHeight = focused ? 40 : 30;
            }else if (route.name == '目標') {
              iconPath = focused
              ? require('./assets/btn-goal.png'):
              require('./assets/icon-goal.png');
              iconWidth = focused ? 80 : 30;
              iconHeight = focused ? 40 : 30;
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
          inactiveTintColor: '#FFFFFF',
          showLabel: false,
          style: {
            height:90,
            backgroundColor:"#fff",
            borderRadius: 30,
            shadowColor: '#707070',
            shadowOffset: { width: 0, height: 3,},
            shadowOpacity: 6,
          }
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