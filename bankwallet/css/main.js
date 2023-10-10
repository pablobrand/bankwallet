import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  inputButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20, // Adjust the spacing between the input and buttons
  },

  input: {
    flex: 1, // Take up available space
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
  },

  inputButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    marginLeft: 10, // Adjust the spacing between the input and button
  },

  inputButtonText: {
    color: "#fff",
    textAlign: "center",
  },

  buttonWrapper: {
    marginVertical: 10,
  },
});
