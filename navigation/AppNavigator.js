import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ResistScreen from "../screens/ResistScreen";
import ScanQrCodeScreen from "../screens/ScanQrCodeScreen";
import ConfirmMyBag from "../screens/ConfirmMyBag";

const Stack = createStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resist" component={ResistScreen} />
        <Stack.Screen name="ScanQrCode" component={ScanQrCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
