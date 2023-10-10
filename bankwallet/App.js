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
      <Text style={{ color: "#fff" }}>Split Me</Text>
      <View style={styles.content}>
        <View style={styles.inputButtonContainer}>
          <TextInput
            style={styles.input}
            placeholder="$ Amount to Deposit"
            onChangeText={handleTextInputChange}
            value={textInputValue}
          />
          <TouchableOpacity
            style={styles.inputButton}
            onPress={handleButtonPress}
          >
            <Text style={styles.inputButtonText}>Go</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            theme="primary"
            label="Uniswap Pool: WETH/DAI"
            onPress={handleButtonPress}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            theme="primary"
            label="Uniswap Pool: WETH/USDT"
            onPress={handleButtonPress}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            theme="primary"
            label="Compound"
            onPress={handleButtonPress}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
