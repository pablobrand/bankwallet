
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import NfcManager, { NfcEvents } from 'react-native-nfc-manager';

export default function App() {
  const [hasNfc, setHasNFC] = useState(null);

  useEffect(() => {
    const checkIsSupported = async () => {
      try {
        const deviceIsSupported = await NfcManager.isSupported();
        if (deviceIsSupported === null || deviceIsSupported === undefined) {
          throw new Error('NFC support status is null or undefined');
        }
        
        setHasNFC(deviceIsSupported);
        if (deviceIsSupported) {
          await NfcManager.start();
        }
      } catch (error) {
        console.error('Error checking NFC support:', error);
        // Handle the error as needed (e.g., show an error message to the user)
      }
    };

    checkIsSupported();
  }, []);

  useEffect(() => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
      console.log('Tag found');
    });

    return () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    };
  }, []);

  const readTag = async () => {
    try {
      await NfcManager.registerTagEvent();
    } catch (error) {
      console.error('Error registering tag event:', error);
      // Handle the error as needed (e.g., show an error message to the user)
    }
  };

  const cancelReadTag = () => {
    // Implement the cancel logic here
    return NfcManager.cancelTechnologyRequest()
  };

  if (hasNfc === null) return null;

  if (!hasNfc) {
    return (
      <View style={styles.sectionContainer}>
        <Text>NFC not supported</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text>Hello world</Text>
      <TouchableOpacity style={[styles.btn, styles.btnScan]} onPress={readTag}>
        <Text style={{ color: 'white' }}>Scan Tag</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.btnCancel]} onPress={cancelReadTag}>
        <Text style={{ color: 'white' }}>Cancel Scan</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    // Define your common button styles here
  },
  btnScan: {
    // Define styles for the Scan button here
  },
  btnCancel: {
    // Define styles for the Cancel button here
  },
});
