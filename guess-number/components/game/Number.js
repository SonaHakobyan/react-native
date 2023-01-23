import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Number({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default Number;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    maxWidth: 300,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeigh: "bold",
  },
});
