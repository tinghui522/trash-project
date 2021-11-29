import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TrashcanScreen from './TrashcanScreen';
import RecordScreen from './RecordScreen';
import AboutScreen from './AboutScreen';
import TrashSuggestScreen from './TrashSuggestScreen';
import MonthScreen from './MonthScreen';
import GoalScreen from './GoalScreen';

import LanguageScreen from './LanguageScreen';
import AlertScreen from './AlertScreen';
import MailScreen from './MailScreen';

export const Stack = createStackNavigator();

export const TrashcanStack = () => {
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
  
export const TrashSuggestStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TrashSuggest"component={TrashSuggestScreen}  
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
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Alert" component={AlertScreen} />
      <Stack.Screen name="Mail" component={MailScreen} />
      </Stack.Navigator>
  );
}