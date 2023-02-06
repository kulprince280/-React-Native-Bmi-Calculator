import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {
    const bmiValue = weight / (((height / 100) * height) / 100);
    setBmi(bmiValue.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        onChangeText={(text) => setHeight(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        onChangeText={(text) => setWeight(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {bmi !== "" && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your BMI: {bmi}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginVertical: 20,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    width: "80%",
    marginVertical: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  resultContainer: {
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
  },
  resultText: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
  },
});

export default App;
