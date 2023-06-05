import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Screens/home/Home";
import User from "../Screens/profile/User";

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="userdetails"
        component={User}
        options={{
          title: "User Details",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Root;
