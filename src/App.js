import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Task from "./pages/Task";
import NewTask from "./pages/NewTask";
import Details from "./pages/Details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen
          name="Task"
          component={Task}
          options={{ headerTintColor: "#f92e6a" }}
        />
        <Stack.Screen
          name="NewTask"
          component={NewTask}
          options={{ headerTintColor: "#f92e6a" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerTintColor: "#f92e6a" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
 */