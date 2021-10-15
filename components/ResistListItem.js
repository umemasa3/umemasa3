import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from "react-native";
import BirthdayPicker from "./BirthdayPicker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0e0e6",
  },
  resisterContainer: {
    height: 50,
    width: "35%",
    borderColor: "gray",
    borderWidth: 1,
  },
  text: {
    flex: 1,
    fontSize: 28,
    textAlign: "center",
  },
  inner: {
    padding: 10,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

const ResistListItem = ({ onPress }) => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Name</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <Text style={styles.header}>Date of Birth</Text>
          <BirthdayPicker
            selectedYear={2020}
            selectedMonth={0}
            selectedDay={27}
            yearsBack={50}
            onYearValueChange={(year, i) =>
              console.log("Year was changed to: ", year)
            }
            onMonthValueChange={(month, i) =>
              console.log("Month was changed to: ", month)
            }
            onDayValueChange={(day, i) =>
              console.log("Day was changed to: ", day)
            }
          />
          <Text style={styles.header}>Phone Number</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="09011112222"
            keyboardType="numeric"
          />
          <Text style={styles.header}>Passport Number</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="TZ123456789"
            keyboardType="default"
          />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ResistListItem;
