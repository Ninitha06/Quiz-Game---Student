import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useState } from 'react';
import Slider from 'react-native-swipe-slider';
import { Audio } from 'expo-av';

import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function SettingScreen() {
  const [isSwitchEnabled, setSwitch] = React.useState(false);
  const [value, setValue] = useState(50);
  const [iconSliderValue, setIconSliderValue] = useState(50);

  const [sound, setSound] = React.useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/Song.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          backgroundColor: '#FF6347',
          color: 'pink',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          padding: 10,
        }}>
        {' '}
        Cart and Help{' '}
      </Text>
      <View
        style={{
          marginTop: 8,
          backgroundColor: '#FF6347',
          borderRadius: 5,
          width: 175,
          height: 35,
          textAlign: 'center',
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.3,
          shadowRadius: 10.32,
          elevation: 16,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            marginTop: 5,
            paddingHorizontal: 5,
          }}>
          Cart and Help
        </Text>

        <Ionicons
          style={styles.icons}
          name="md-help-circle"
          size={24}
          color="white"
        />
      </View>

      <View
        style={{
          borderBottomColor: '#FF6347',
          borderBottomWidth: 3,
          marginTop: 10,
        }}>
        {' '}
      </View>

      <View style={styles.menuItem}>
        <AntDesign name="sound" size={24} color="#FF6347" />
        <Text style={styles.menuItemText}> In Game Sound</Text>
        <TouchableOpacity onPress={playSound}>
          <Switch
            style={{ marginLeft: 15 }}
            value={isSwitchEnabled}
            onValueChange={(value) => setSwitch(value)}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderBottomColor: '#FF6347',
          borderBottomWidth: 3,
        }}>
        {' '}
      </View>

      <View style={styles.menuItem}>
        <Icon name="bell" type="font-awesome" color="#FF6347" size={24} />
        <Text style={styles.menuItemText}>Notifications</Text>
        <Switch
          style={{ marginLeft: 15 }}
          value={isSwitchEnabled}
          onValueChange={(value) => setSwitch(value)}
        />
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#FF6347',
              borderRightWidth: 3,
            },
          ]}>
          <Text style={{ textAlign: 'center', color: '#777777', fontSize: 12 }}>
            Visit the feedback screen to rate use and tell us comments for
            improvment!
          </Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={{ textAlign: 'center', color: '#777777', fontSize: 12 }}>
            You can edit your profile by navigating to the edit profile screen!
          </Text>
        </View>
      </View>

      <View style={styles.menuItem}>
        <MaterialIcons name="brightness-high" size={24} color="#FF6347" />
        <Text style={styles.menuItemText}>Brigthness</Text>
      </View>

      <View
        style={{
          borderBottomColor: '#FF6347',
          borderBottomWidth: 3,
        }}>
        {' '}
      </View>

      <View
        style={{
          marginTop: 8,
          backgroundColor: '#FF6347',
          borderRadius: 5,
          width: 160,
          height: 35,
          textAlign: 'center',
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.3,
          shadowRadius: 10.32,
          elevation: 16,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            marginTop: 5,
            paddingHorizontal: 5,
          }}>
          How to play
        </Text>

        <AntDesign style={styles.icons} name="play" size={23} color="white" />
      </View>

      <Text
        style={{
          color: '#777777',
          fontSize: 12,
          marginTop: 10,
          paddingHorizontal: 5,
        }}>
        To play this Quiz Game correctly, first go to the Home screen and then
        press the 'New Game' button. When you press the button, a new screen
        will appear, where you can select a question theme from science and
        nature, history and art, geography, movies and books, or randomly
        displayed questions. Finally, once you've decided on a theme, click on
        it to begin the questions. Unfortunately, you will have to restart your
        window and log in again to return to the Home screen.
      </Text>

      <View style={styles.container2}>
        <View style={styles.section}>
          <Slider
            min={0}
            max={100}
            value={value}
            onChange={(value) => setValue(value)}
            style={styles.slider}
            backgroundColor={'#e5e5e5'}
            barColor={'#fca311'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginLeft: 180,
    marginTop: -35,
  },

  slider: {
    justifyContent: 'right',
    width: '80%',
    height: 14,
    marginTop: -190,
    backgroundColor: 'lightgray',
  },
  infoBoxWrapper: {
    borderBottomColor: '#FF6347',
    borderBottomWidth: 3,
    borderTopColor: '#FF6347',
    borderTopWidth: 3,
    flexDirection: 'row',
    height: 80,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
  },
  icons: {
    padding: 5,
  },
  container2: {
    flex: 1,
    justifyContent: 'right',
    backgroundColor: '#ffffff',
    padding: 5,
  },
});
