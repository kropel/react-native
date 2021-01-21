import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>Game over!!</Text>
        <Text>Computer guess in {props.guessRound} rounds.</Text>
        <Text>Number was: {props.userNumber}</Text>
        <Button title="Restart" onPress={props.onRestart} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  card: { width: 300, maxWidth: '80%', alignItems: 'center' },
});

export default GameOverScreen;
