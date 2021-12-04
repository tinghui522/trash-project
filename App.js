import React, { useContext, useEffect }  from 'react';
import { Image, View } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './navigation/MainTab';
import { StatusBar } from 'expo-status-bar';
import { SplashScreen } from 'expo';

const PERSISTENCE_KEY = "NAVIGATION_STATE";

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  // const containerRef = React.useRef();
  // const {getInitialState} = useLinking(containerRef);
  
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
            // onStateChange={(state) =>
            //   AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
            // }
          >
            <MainTab/>
          </NavigationContainer>
        );
  }
}