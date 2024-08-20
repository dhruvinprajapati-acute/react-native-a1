/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Your Goal...!!!" 
                    onChangeText={goalInputHandler} 
                    value={enterdGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancle" onPress={props.onCancle} color="#f31282"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    image:{
        width: 100,
        height: 100
    },
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        margin: 8,
        padding: 12,
      },
      buttonContainer:{
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: '30%',
        marginHorizontal: 8,
      }
})

export default GoalInput