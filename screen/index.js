import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TrashcanScreen from './TrashcanScreen';
import RecordScreen from './RecordScreen';
import AboutScreen from './AboutScreen';
import SuggestScreen from './SuggestScreen';
import MonthScreen from './MonthScreen';
import GoalScreen from './GoalScreen';

import LanguageScreen from './LanguageScreen';
import AlertScreen from './AlertScreen';
import MailScreen from './MailScreen';

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
    <Stack.Screen name=" "component={Aboutcreen}  
      options={{
        headerStyle:{
            height:0,
        }
      }} />  
    <Stack.Screen name="Language" component={LanguageScreen} 
      options={{
        headerStyle:{
        height:0,
        },
        headerLeft: null,
      }} />
    <Stack.Screen name="Alert" component={AlertScreen} />
    <Stack.Screen name="Mail" component={MailScreen} />
    </Stack.Navigator>
  );
}