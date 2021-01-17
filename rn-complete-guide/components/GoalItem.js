import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => (
  <TouchableOpacity onPress={props.onDelete}>
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 2,
    marginVertical: 10,
  },
});

export default GoalItem;
