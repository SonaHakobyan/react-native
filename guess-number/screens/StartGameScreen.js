import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructureText from "../components/ui/InstructureText";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function StartGameScreen({ onPicked }) {
  const [inputNumber, setInputNumber] = useState("");

  const handleReset = () => {
    setInputNumber("");
  };

  const handleConfirm = () => {
    if (isNaN(inputNumber) || inputNumber < 0) {
      Alert.alert("Invalid number", "Positive number required", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }

    onPicked(inputNumber);
  };

  const { height } = useWindowDimensions();
  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.root}>
      <KeyboardAvoidingView style={styles.root} behavior="position">
        <View style={[styles.screen, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructureText>Enter a Number</InstructureText>
            <TextInput
              style={styles.inputText}
              keyboardType="number-pad"
              autoCorrect={false}
              maxLength={3}
              value={inputNumber}
              onChangeText={setInputNumber}
            />
            <View style={styles.buttonsContainer}>
              <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
              <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginHorizontal: 16,
  },
  inputButtonContainer: {
    flex: 1,
  },
  inputText: {
    height: 50,
    width: 100,
    fontSize: 32,
    marginVertical: 8,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
  },
});

export default StartGameScreen;
