import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ResistListItem from "../components/ResistListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0e0e6",
  },
});

export default ResistScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ResistListItem onPress={() => navigation.navigate("Resist")} />
    </SafeAreaView>
  );
};
