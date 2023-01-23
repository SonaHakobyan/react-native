import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}
const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
    marginHorizontal: 16,
    alignItems: "center",
    backgroundColor: Colors.primary600,
    shadowColor: Colors.primary800,
    shadowOpacity: 0.75,
    shadowRadius: 8,
    elevation: 16,
  },
});
export default Card;
