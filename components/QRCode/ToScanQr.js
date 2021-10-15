import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0e0e6",
    alignItems: "center",
    justifyContent: "center",
  },
  resisterContainer: {
    height: 50,
    width: "40% ",
    borderColor: "gray",
    borderWidth: 1,
  },
  text: {
    flex: 1,
    fontSize: 28,
    textAlign: "center",
  },
});

const ToScanQr = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.resisterContainer} onPress={onPress}>
      <Text style={styles.text}>Resist your tag</Text>
    </TouchableOpacity>
  );
};

export default ToScanQr;
