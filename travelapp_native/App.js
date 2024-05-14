import React, { useEffect } from "react";
import { Alert } from "react-native";
import messaging from "@react-native-firebase/messaging";

import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import PTTT1 from "./screens/PTTT/PTTT1";
import PTTT2 from "./screens/PTTT/PTTT2";
import PTTT3 from "./screens/PTTT/PTTT3";
import LHSK1 from "./screens/LHSK/LHSK1";
import LHSK2 from "./screens/LHSK/LHSK2";
import DetailsScreen from "./screens/Detail";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
  //notifications
  // android
  // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

  //ios
  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log("Authorization status:", authStatus);
  //   }
  // }





  useEffect(() => {
    // if(requestUserPermission){
    //   //return fcm token for the device
    //   messaging.getToken().then(token =>{
    //     console.log(token);
    //   })
    // }
    // else{
    //   console.log("Failed token status", authStatus);
    // }
    
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PTTT1"
          component={PTTT1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PTTT2"
          component={PTTT2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PTTT3"
          component={PTTT3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LHSK1"
          component={LHSK1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LHSK2"
          component={LHSK2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
