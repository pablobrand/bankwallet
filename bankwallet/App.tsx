import { StyleSheet, Text, View, Pressable } from "react-native";

import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
import Button from "./components/Button";

// Add in the useWalletConnectModal hook

const projectId = "0e6f568e1144d3f8a278585f3e311bd1";

const providerMetadata = {
  name: "Bank-Wallet",
  description: "Bank-Wallet",
  url: "",
  icons: [""],
  redirect: {
    native: "",
    universal: "",
  },
};

export default function App() {
  // Add in the useWalletConnectModal hook + props
  const { open, isConnected, address, provider } = useWalletConnectModal();

  // Function to handle the
  const handleButtonPress = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }
    return open();
  };

  // Main UI Render
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Split Me</Text>
      <Text>{isConnected ? address : "No Connected"}</Text>
      <Pressable onPress={handleButtonPress} style={styles.pressableMargin}>
        <Text>{isConnected ? "Disconnect" : "Connect"}</Text>
      </Pressable>
      {isConnected ? (
        <Button label={"Uniswap Pool"} theme={"primary"} />
      ) : (
        <Text></Text>
      )}
      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  pressableMargin: {
    marginTop: 16,
  },
});
