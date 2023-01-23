import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useState } from "react";
import Colors from "./constants/colors";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const backgroundImage = require("./assets/images/background.png");

  const [pickedNumber, setPickedNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState();

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const pickedNumberHandler = (number) => {
    setPickedNumber(number);
    setGameIsOver(false);
  };

  let screen = <StartGameScreen onPicked={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = (
      <GameScreen numberToGuess={pickedNumber} onGameOver={gameOverHandler} />
    );
  }

  const startGame = () => {
    setPickedNumber();
    setGameIsOver(false);
  };

  if (gameIsOver) {
    screen = (
      <GameOverScreen
        pickedNumber={pickedNumber}
        guessRounds={guessRounds}
        onPlayAgain={startGame}
      />
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <ImageBackground
        resizeMode="cover"
        imageStyle={styles.image}
        style={[styles.root, styles.background]}
        source={backgroundImage}
      >
        <SafeAreaView style={styles.root}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    backgroundColor: Colors.accent600,
  },
  image: {
    opacity: 0.8,
  },
});
