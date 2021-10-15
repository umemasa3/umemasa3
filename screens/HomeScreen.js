import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";
import ToScanQr from "../components/QRCode/ScanQrCodeItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0e0e6",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListItem onPress={() => navigation.navigate("Resist")} />
      <ToScanQr onPress={() => navigation.navigate("ScanQrCode")} />
    </SafeAreaView>
  );
};
