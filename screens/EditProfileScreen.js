import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import { useTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import MyHeader from '../components/MyHeader'

export default class EditProfileScreen extends React.Component{
  
  render(){
    
  return (
    
    <View style={styles.container}>
     <MyHeader title="Edit Your Profile" navigation={this.props.navigation}/>
      <View
        style={{
          margin: 20,
        }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
            Edit Your Profile
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color={"black"} size={20} />
          <TextInput
            placeholder="Update First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={"black"} size={20} />
          <TextInput
            placeholder="Update Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={"black"} size={20} />
          <TextInput
            placeholder="Update Contact"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={"black"} size={20} />
          <TextInput
            placeholder="Update Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" color={"black"} size={20} />
          <TextInput
            placeholder="Update Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
            ]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" color={"black"} size={20} />
          <TextInput
            placeholder="Update City"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
            ]}
          />
        </View>
        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => alert('User Profile updated successfully')}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: { 
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 30,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
});
