import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MyHeader from '../components/MyHeader';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyHeader title="Home" navigation={this.props.navigation} />
        <Image
          source={require('../assets/adri.png')}
          style={{
            width: 300,
            height: 250,
            marginTop: 10,
            alignSelf: 'center',
          }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('chooseQuestionTheme');
          }}>
          <Text style={styles.buttonText}>New Game</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.props.navigation.navigate('HardQuestions');
          }}>
          <MaterialCommunityIcons name="skull" size={24} color="white" />
          <Text style={styles.buttonText}>Challenge</Text>
          <MaterialCommunityIcons name="skull" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  button: {
    width: '60%',
    marginTop: 35,
    marginLeft: 65,
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(25),
    backgroundColor: '#FF6347',
    shadowColor: '#000',
    marginBottom: RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: RFValue(20),
    paddingHorizontal: 10,
  },
  button2: {
    flexDirection: 'row',
    width: '60%',
    marginTop: 40,
    marginLeft: 65,
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(25),
    backgroundColor: 'red',
    shadowColor: '#red',
    marginBottom: RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
