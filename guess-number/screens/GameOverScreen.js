import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen({ onPlayAgain, guessRounds, pickedNumber }) {
  const { height } = useWindowDimensions();
  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <View style={[styles.screen, { marginTop: marginTopDistance }]}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{guessRounds}</Text>{" "}
        rounds to guess number{" "}
        <Text style={styles.highlight}>{pickedNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onPlayAgain}>Play Again!</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  highlight: {
    color: Colors.primary800,
  },
});

export default GameOverScreen;
