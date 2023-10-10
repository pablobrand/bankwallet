import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Button from "./components/Button";
import { useState } from "react";
import { styles } from "./css/main";

export default function App() {
  const [textInputValue, setTextInputValue] = useState("");

  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };

  const handleButtonPress = () => {
    // Handle button press with the input field value
    alert("Button pressed with input value: " + textInputValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Split Me</Text>
        {/* First Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="$ Uniswap V3 (WETH/DAI)"
            onChangeText={handleTextInputChange}
            value={textInputValue}
          />
        </View>
        {/* Second Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="$ Compound (DAI/sDAI)"
            onChangeText={handleTextInputChange}
            value={textInputValue}
          />
        </View>
        {/* Go Button */}
        <TouchableOpacity
          style={styles.inputButton}
          onPress={handleButtonPress}
        >
          <Text style={styles.inputButtonText}>Split</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
