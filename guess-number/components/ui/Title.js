import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    padding: 16,
    marginTop: 5,
    borderWidth: 1,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    borderColor: "white",
  },
});
