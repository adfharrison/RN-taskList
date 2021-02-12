import React, { useState, useEffect } from 'react';

import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState();

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.addGoalContainer}>
        <TextInput
          placeholder={'Add Course Goal'}
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' color='red' onPress={props.cancelAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title='Add' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  addGoalContainer: {
    marginTop: 30,
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    padding: 5,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: 250,
    fontSize: 25,
    padding: 5,
    margin: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },

  button: {
    width: 80,
  },
});

export default GoalInput;
