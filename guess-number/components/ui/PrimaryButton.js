import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    padding: 8,
    marginHorizontal: 8,
    marginTop: 20,
    borderRadius: 28,
    alignItems: "center",
    backgroundColor: Colors.primary800,
  },
  text: {
    color: Colors.accent500,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default PrimaryButton;
