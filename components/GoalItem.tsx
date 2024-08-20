import { StyleSheet, Text, View } from "react-native";

function GoalItem(props : any){
    return(
        <View style={styles.goalItems}>
          <Text style={styles.goalText}>
            {props.text}
          </Text>
        </View>
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