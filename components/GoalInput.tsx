/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props: any) {
    const [enterdGoalText, setEnterdGoalText] = useState('');

    function goalInputHandler(value : any){
      setEnterdGoalText(value);
    }

    function addGoalHandler(){
        props.onAddGoal(enterdGoalText);
        setEnterdGoalText('');
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput} 
                placeholder="Your Goal...!!!" 
                onChangeText={goalInputHandler} 
                value={enterdGoalText}
            />
            <Button title="Add Goal" onPress={addGoalHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
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
})

export default GoalInput