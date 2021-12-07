import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Title, Caption, TouchableRipple } from 'react-native-paper';
import Geography from '../questions/Geography';

export default class chooseQuestionTheme extends React.Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: '#FF6347' }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 22,
              color: 'pink',
              marginTop: 5,
              padding: 10,
            }}>
            Choose A Theme
          </Text>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Icon
              style={[
                { color: 'white', marginTop: -54, marginLeft: 10, padding: 15 },
              ]}
              size={25}
              name={'ios-home'}
            />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: '#EAEFF2' }}>
          <Text
            style={{
              backgroundColor: '#EAEFF2',
              fontWeight: '500',
              marginTop: 15,
              paddingHorizontal: 10,
            }}>
            Top Quiz Categories:
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#EAEFF2',
          }}>
          <View>
            <View style={styles.SquareShapeView1}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('History');
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    marginTop: 100,
                    fontWeight: 430,
                    color: '#666666',
                  }}>
                  History & Art
                </Text>
                <Image
                  source={require('../assets/History&ArtIcon.png')}
                  style={{
                    alignSelf: 'center',
                    height: 300,
                    width: 460,
                    marginTop: -290,
                    marginLeft: 370,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.SquareShapeView2}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Geography');
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    marginTop: 100,
                    fontWeight: 430,
                    color: '#666666',
                  }}>
                  Geography
                </Text>
                <Image
                  source={require('../assets/GeographyIcon.png')}
                  style={{
                    alignSelf: 'center',
                    height: 500,
                    width: 400,
                    marginTop: -139,
                    marginLeft: 105,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.SquareShapeView1}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Science');
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    marginTop: 100,
                    fontWeight: 430,
                    color: '#666666',
                  }}>
                  Science & Nature
                </Text>
                <Image
                  source={require('../assets/Science&NatureIcon.png')}
                  style={{
                    alignSelf: 'center',
                    height: 300,
                    width: 400,
                    marginTop: -140,
                    marginLeft: 100,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.SquareShapeView2}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Movies');
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    marginTop: 100,
                    fontWeight: 430,
                    color: '#666666',
                  }}>
                  Movies & Books
                </Text>
                <Image
                  source={require('../assets/Movies&BooksIcon.png')}
                  style={{
                    alignSelf: 'center',
                    height: 300,
                    width: 540,
                    marginTop: -190,
                    marginLeft: 370,
                  }}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('Random');
              }}>
              <Text style={styles.buttonText}>Random Questions</Text>
            </TouchableOpacity>

            <View style={styles.RectangleShapeView}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: 16,
                  textAlign: 'center',
                  marginTop: 5,
                }}>
                What About More Question Themes?
              </Text>

              <Text
                style={{
                  color: 'white',
                  fontWeight: 500,
                  fontSize: 14,
                  textAlign: 'center',
                  paddingHorizontal: 5,
                  marginTop: 5,
                }}>
                Glad you asked, You can tell us in the feedback screen what
                other themes you will like to see in future updates.
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SquareShapeView1: {
    marginTop: 25,
    marginRight: 150,
    width: 120,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  SquareShapeView2: {
    marginTop: -120,
    marginLeft: 150,
    width: 120,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  button: {
    width: 200,
    marginTop: 30,
    marginLeft: 30,
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
  },
  RectangleShapeView: {
    marginLeft: 10,
    marginTop: 10,
    width: 120 * 2,
    height: 120,
    backgroundColor: '#FF6347',
  },
});
