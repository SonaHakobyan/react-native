import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.itemContainer}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    padding: 20,
    marginVertical: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.primary600,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});

export default GuessLogItem;
