import React from 'react';
import { Text, View, StyleSheet, Button, Switch, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';

export default function App() {
  const [sound, setSound] = React.useState();
  const [isSwitchEnabled, setSwitch] = React.useState(false);
  const [value, setValue] = useState(50);

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
     <TouchableOpacity onPress={this.playSound}>
      <Switch
        style={{ marginLeft: 15 }}
        value={isSwitchEnabled}
        onValueChange={(value) => setSwitch(value)}
      />
      </TouchableOpacity>
  );
}

