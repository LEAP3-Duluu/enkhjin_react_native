import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MyStackNavigation} from './src/navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {MyTabs} from './src/navigation/tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <MyStackNavigation /> */}
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
