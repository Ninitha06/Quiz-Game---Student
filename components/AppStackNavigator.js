import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen  from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen'
import Geography from '../questions/Geography'




export const AppStackNavigator = createStackNavigator({
  HomeScreen : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  
 ProfileScreen : {
    screen : ProfileScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  Geography:{
    screen:Geography
  }

},
  {
    initialRouteName: 'HomeScreen'
  }
);
