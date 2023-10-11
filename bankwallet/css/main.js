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
  text: {
    color: "#FFF",
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  inputButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    width: 100,
  },
  inputButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    marginBottom: 20,
    padding: 10, // Added padding
  },
});
