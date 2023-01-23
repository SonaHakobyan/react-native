import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructureText({ children }) {
  return <Text style={styles.text}> {children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: Colors.accent500,
  },
});
export default InstructureText;
