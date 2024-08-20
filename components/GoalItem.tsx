/* eslint-disable react/react-in-jsx-scope */
import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(this: any, props : any){
    return(
        <View style={styles.goalItems}>
            <Pressable android_ripple={{color: '#dddddd'}} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItems: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
    },
    goalText: {
        padding:8,
        color: 'white',
    },
})

export default GoalItem