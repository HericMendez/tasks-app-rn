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
        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: "#222" },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen name="Task" component={Task} />
          <Stack.Screen name="NewTask" component={NewTask} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar style="light" />
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
