import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Button from "./components/Button";
import { useState } from "react";
import { styles } from "./css/main";
// import { onConnect } from './utils/contractHelper';
import {
  RecoilRoot,
  useRecoilState,
} from 'recoil';
import { walletAddrAtom } from "./utils/recoil";

export default function Root(){
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  )
}

function App() {
  const [textInputValue, setTextInputValue] = useState("");
  const [walletAddr,setWalletAddr] = useRecoilState(walletAddrAtom);
  
  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };

  const connectWallet = async()=>{
    // let addr = await onConnect();
		setWalletAddr(addr);
  }

  const handleButtonPress = () => {
    // Handle button press with the input field value
    alert("Button pressed with input value: " + textInputValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{ color: "#FFF" }}>Split Me</Text>
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

        {walletAddr.length===0 &&<TouchableOpacity
          style={styles.inputButton}
          onPress={connectWallet}
        >
          <Text style={styles.inputButtonText}>Connect Wallet</Text>
        </TouchableOpacity>}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
