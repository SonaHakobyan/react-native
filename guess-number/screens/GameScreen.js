import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructureText from "../components/ui/InstructureText";
import Title from "../components/ui/Title";
import Number from "../components/game/Number";
import GuessLogItem from "../components/ui/GuessLogItem";

const generateNumber = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateNumber(min, max, exclude);
  }

  return rndNum;
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ numberToGuess, onGameOver }) {
  const initialGuess = generateNumber(1, 100, numberToGuess);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);

  useEffect(() => {
    if (currentGuess == numberToGuess) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, numberToGuess, onGameOver]);

  const nextGuessHnadler = (direction) => {
    if (
      (direction === "lower" && currentGuess < numberToGuess) ||
      (direction === "greater" && currentGuess > numberToGuess)
    ) {
      Alert.alert("Do not lie!", "You know what I mean...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newNum = generateNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newNum);
    setGuessRounds((prevGuessRounds) => [newNum, ...prevGuessRounds]);
  };

  const renderGuessRound = ({ index, item }) => {
    return (
      <GuessLogItem guess={item} roundNumber={guessRounds.length - index} />
    );
  };

  const { height } = useWindowDimensions();
  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <View style={[styles.screen, { marginTop: marginTopDistance }]}>
      <Title>Opponent's Guess</Title>
      <Number>{currentGuess}</Number>
      <Card>
        <InstructureText>Higher or Lower?</InstructureText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHnadler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHnadler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={renderGuessRound}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
