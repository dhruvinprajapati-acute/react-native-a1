/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


function App(): React.JSX.Element {
  const [courseGoles, setCourseGoles] = useState([]);

  function addGoalHandler(enterdGoalText:any){
    setCourseGoles((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enterdGoalText, id: Math.random().toString()}
    ]);
  }
  function deleteGoalsHandler(id: string){
    setCourseGoles(currentGoalState => {
      return currentGoalState.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoles} 
        renderItem={(itemData) => {
          return (
            <GoalItem 
              text={itemData.item.text} 
              onDeleteItem={deleteGoalsHandler}
              id={itemData.item.id}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer:{
    flex:4,
  },
});

export default App;
