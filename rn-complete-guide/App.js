import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { uid: (Math.random() * new Date().getTime()).toString(), value: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentGoals) => currentGoals.filter((goal) => goal.uid !== id));
  };

  const cancelAddingGoal = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} onCancel={cancelAddingGoal} />
      <FlatList
        keyExtractor={(item) => item.uid}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            onDelete={() => {
              deleteGoalHandler(itemData.item.uid);
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
