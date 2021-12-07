import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Caption,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';

export default class SettingScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      last_name: '',
      contact: '',
      emailId: '',
      userId: firebase.auth().currentUser.email,
      image: '#',

      docId: '',
    };
  }

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child('user_profiles/' + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child('user_profiles/' + imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: '#' });
      });
  };

  getUserProfile() {
    db.collection('users')
      .where('email_id', '==', this.state.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            name: doc.data().first_name + ' ' + doc.data().last_name,
            docId: doc.id,
            image: doc.data().image,
          });
        });
      });
  }

  componentDidMount() {
    this.fetchImage(this.state.userId);
    this.getUserProfile();
  }  
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <MyHeader title="Profile" navigation={this.props.navigation} />
        <View
          style={{
            flex: 0.5,

            alignItems: 'center',
            backgroundColor: 'white',
          }}>

        <Text > </Text>

          <Avatar
            rounded
            source={{
              uri: this.state.image,
            }}
            size="large"
            onPress={() => this.selectPicture()}
            containerStyle={styles.imageContainer}
            showEditButton
            activeOpacity={0.7}
            icon={{name: 'user', type: 'font-awesome'}}
          />

          <Text style={{ fontWeight: '100', fontSize: 20, paddingTop: 10 }}>
            {this.state.name}
          </Text>
          
          <Text style={{ fontWeight: '100', fontSize: 13, paddingTop: 10 }}>
            {this.state.emailId}
          </Text>
          
        </View>

        <View>
          <TextInput
            style={styles.inputbox}
            placeholderTextColor="#FF6347"
            placeholder="Enter your Name"
            onChangeText={(text) => {
              this.setState({
                name: text,
              });
            }}
          />
          <TextInput
            style={styles.inputbox}
            placeholderTextColor="#FF6347"
            placeholder="Enter your Last Name"
            onChangeText={(text) => {
              this.setState({
                last_name: text,
              });
            }}
          />
          <TextInput
            style={styles.inputbox}
            placeholderTextColor="#FF6347"
            placeholder="Enter your Country"
            onChangeText={(text) => {
              this.setState({
                last_name: text,
              });
            }}
          />

            <TextInput
              style={styles.inputbox}
              placeholderTextColor="#FF6347"
              placeholder="Enter your email"
              keyboardType={'email-Id'}
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
            />

          <TextInput
            style={styles.inputbox}
            placeholderTextColor="#FF6347"
            placeholder="Contact"
            keyboardType={'numeric'}
            onChangeText={(text) => {
              this.setState({
                contact: text,
              });
            }}
          />
          <View style={{ alignSelf: 'center' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert('User name added successfully')}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputbox: {
    fontWeight: 'bold',
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  button: {
    width: 200,
    marginTop: 35,
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
});
