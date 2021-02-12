import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/goalItem';
import GoalInput from './components/goalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showAddGoal, setShowAddGoal] = useState(false);

  const addGoalHandler = (goal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goal },
    ]);
    setShowAddGoal(false);
  };

  const removeGoalHandler = (goalId) => {
    console.log(goalId);
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const toggleShowAddGoal = () => {
    setShowAddGoal(true);
  };

  const cancelAddGoal = () => {
    setShowAddGoal(false);
  };
  return (
    <View style={styles.screen}>
      <Button title={'Add New Goal'} onPress={toggleShowAddGoal} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        visible={showAddGoal}
        cancelAddGoal={cancelAddGoal}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={(data) => (
          <GoalItem
            title={data.item.value}
            id={data.item.id}
            onDelete={removeGoalHandler}
          />
        )}
        style={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },

  listContainer: {
    marginVertical: 10,

    padding: 5,
  },
});
