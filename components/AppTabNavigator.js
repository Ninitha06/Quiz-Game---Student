import React from 'react';
import { Image ,View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingScreen from '../screens/SettingScreen'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';




export const AppTabNavigator = createBottomTabNavigator({
 
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>
        ),
        activeColor: '#FF6347',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#FF6347' },
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'ios-person'}
            />
          </View>
        ),
        activeColor: '#FF6347',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#f69b31' },
      },
    },

    Cart: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'md-settings'}
            />
          </View>
        ),
        activeColor: '#FF6347',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#FF6347' },
      },
    },
  },
  
);
