/* eslint-disable react/react-in-jsx-scope */
import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(this: any, props : any){
    return(
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItems}>
            <Text style={styles.goalText}>
                {props.text}
            </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    goalItems: {
      margin: 8,
      padding:8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
    },
    goalText: {
      color: 'white',
    },
})

export default GoalItem