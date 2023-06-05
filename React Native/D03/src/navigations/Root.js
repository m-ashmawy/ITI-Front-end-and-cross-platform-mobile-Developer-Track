import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sections from "../screens/Sections";
import Add from "../screens/Add";
import Users from "../screens/Users";

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="To Do List" component={Add} />
      <Stack.Screen name="Sections" component={Sections} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="User Details" component={Users} />
    </Stack.Navigator>
  );
}
