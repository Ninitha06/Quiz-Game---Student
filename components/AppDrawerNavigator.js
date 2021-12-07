import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import EditProfileScreen from '../screens/EditProfileScreen'
import FeedBackScreen from '../screens/FeedbackScreen'
import AboutTheDevelopers from '../screens/AboutTheDevelopers'
import chooseQuestionTheme from '../screens/chooseQuestionTheme'
import Geography from '../questions/Geography'
import History from '../questions/History&Art'
import Movies from '../questions/Movies&Books'
import Science from '../questions/Science&Nature'
import HardQuestions from '../questions/HardQuestions'
import Random from '../questions/Random'
export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  EditProfile: {
    screen : EditProfileScreen
  },
  FeedBack:{
    screen: FeedBackScreen
  },
  AboutTheDevelopers: {
    screen : AboutTheDevelopers 
  },
  chooseQuestionTheme:{
    screen: chooseQuestionTheme,
    navigationOptions:{
     drawerLabel: () => null
    }
  },
 
  History:{
    screen:History,
    navigationOptions:{
     drawerLabel: () => null
    }
 

  },
   Geography:{
    screen:Geography,
    navigationOptions:{
     drawerLabel: () => null
    }
  },
  Movies:{
    screen:Movies,
    navigationOptions:{
     drawerLabel: () => null
    }
  },
  Science:{
    screen:Science,
    navigationOptions:{
      drawerLabel:()=> null
    }
    
  },

  HardQuestions:{
    screen:HardQuestions,
    navigationOptions:{
      drawerLabel:()=> null
    }
  },

  Random:{
    screen:Random,
    navigationOptions:{
      drawerLabel:()=> null
    }
  }
  
},

  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })