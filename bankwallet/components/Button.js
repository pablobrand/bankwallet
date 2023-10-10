import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ label, theme }) {
  const buttonStyles = [
    styles.button,
    theme === "primary" && styles.primaryButton,
  ];

  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && { opacity: 0.7 },
      ]}
      onPress={() => alert("You pressed a button.")}
    >
      <View style={buttonStyles}>
        <Text
          style={[
            styles.buttonLabel,
            theme === "primary" && styles.primaryButtonLabel,
          ]}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12, // Adjust vertical padding as needed
    paddingHorizontal: 24, // Adjust horizontal padding as needed
    borderRadius: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  primaryButton: {
    backgroundColor: "#ffd33d",
  },
  primaryButtonLabel: {
    color: "#25292e",
  },
});
