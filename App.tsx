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


function App(): React.JSX.Element {
  const [enterdGoalText, setEnterdGoalText] = useState('');
  const [courseGoles, setCourseGoles] = useState([]);

  function goalInputHandler(value : any){
    setEnterdGoalText(value);
  }
  function addGoalHandler(){
    setCourseGoles((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enterdGoalText, id: Math.random().toString()}
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Goal...!!!" onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoles} 
        renderItem={(itemData) => {
          return (
            <View style={styles.goalItems}>
                <Text style={styles.goalText}>
                  {itemData.item.text}
                </Text>
              </View>
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
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBlockColor: '#cccccc',
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    margin: 8,
    padding: 8,
  },
  goalsContainer:{
    flex:4,
  },
  goalItems: {
    margin: 8,
    padding:8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});

export default App;
