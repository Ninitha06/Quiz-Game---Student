import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyHeader from '../components/MyHeader';

const App = () => {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
      <View style={styles.container}>
        <Text
        style={{
          backgroundColor: '#FF6347',
          color: 'pink',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign:'center',
          padding:10
        }}>
        {' '}
        Feed Back{' '}
      </Text>
        <Text style={styles.textStyle}>Rate Our Game</Text>
        {/* View to hold our Stars */}
        <CustomRatingBar />
        <Text style={styles.textStyle}>
          {/* To show the rating selected */}
          {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>
        <TextInput
          style={styles.input2}
          placeholderTextColor="#FF6347"
          placeholder={'example@gmail.com'}
          underlineColor="transparent"
          mode="outlined"
          keyboardType={'email-address'}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#FF6347"
          placeholder={'Write Some Feedback'}
          underlineColor="transparent"
          mode="outlined"
          multiline={true}
          numberOfLines={12} 
        />

        <View>
          <TouchableOpacity
          style={styles.buttonStyle2}
          onPress={() => alert('Feedback sended successfully')}>
          <Text style={styles.buttonTextStyle}>Send</Text>
        </TouchableOpacity>
        </View>
        
      </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#FF6347',
    marginTop: 15,
    fontWeight: 600,
  },
  buttonStyle2: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
    padding: 15,
    backgroundColor: '#FF6347',
    borderRadius: 10,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  input: {
    height: 200,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 5,
    fontWeight:'bold',
    borderColor:'#FF6347'
  },
  input2: {
    height: 40,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 5,
    fontWeight:'bold',
    borderColor:'#FF6347'
  },
});
