import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import { Colors } from '../constants/colors';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game over!!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={600}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/10/12/14/50/person-983889__340.jpg',
          }}
          // source={require('../assets/success.png')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{props.guessRound}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton title="Restart" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  highlight: { color: Colors.primary, fontFamily: 'open-sans-bold' },
  resultContainer: {
    marginHorizontal: 30,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 15,
  },
});

export default GameOverScreen;
