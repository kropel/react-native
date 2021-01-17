import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Course Goal" value={enteredGoal} onChangeText={goalInputHandler} />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 10,
    width: '40%',
  },
});

export default GoalInput;
