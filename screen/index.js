import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TrashcanScreen from './TrashcanScreen';
import RecordScreen from './RecordScreen';
import AboutScreen from './AboutScreen';
import SuggestScreen from './SuggestScreen';
import MonthScreen from './MonthScreen';
import GoalScreen from './GoalScreen';

import LanguageScreen from './LanguageScreen';
import ReminderScreen from './ReminderScreen';
import ContactScreen from './ContactScreen';

export const Stack = createStackNavigator();

export const TrashcanStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Trashcan"component={TrashcanScreen}  
      options={{
        headerStyle:{
          height:0,
        },
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
  
export const TrashSuggestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Suggest"component={SuggestScreen}  
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
    </Stack.Navigator>
  );
}
  
export const MonthStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name=" "component={MonthScreen}  
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
    </Stack.Navigator>
  );
}
  
export const GoalStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name=" "component={GoalScreen}  
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
    </Stack.Navigator>
  );
  }

export const AboutStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name=" "component={AboutScreen}  
      options={{
        headerStyle:{
            height:0,
        }
      }} />  
    {/* <Stack.Screen name="Language" component={LanguageScreen} 
      options={{
        headerStyle:{
        height:0,
        },
        headerLeft: null,
      }} />
    <Stack.Screen name="Reminder" component={ReminderScreen} 
      options={{
        headerStyle:{
        height:0,
        },
        headerLeft: null,
      }} />
    <Stack.Screen name="Contact" component={ContactScreen} 
      options={{
        headerStyle:{
        height:0,
        },
        headerLeft: null,
      }} /> */}
    </Stack.Navigator>
  );
}