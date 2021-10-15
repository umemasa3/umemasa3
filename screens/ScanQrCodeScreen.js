import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ScanQrCodeItem from "../components/QRCode/ScanQrCodeItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0e0e6",
  },
});

export default ScanQrCodeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScanQrCodeItem onPress={() => navigation.navigate("ScanQrCode")} />
    </SafeAreaView>
  );
};
