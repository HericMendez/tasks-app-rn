import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { collection, getDocs } from "firebase/firestore/lite";
import database from "../../config/firebaseconfig";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./styles";
const Task = ({navigation}) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    async function getData() {
      const list = [];
      const tasksCol = await collection(database, "Tasks");
      const taskSnapshot = await getDocs(tasksCol);
      taskSnapshot.docs.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
    }
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList />
      <TouchableOpacity style={styles.buttonNewTask} onPress={()=>navigation.navigate("NewTask")}>
        <Text style={styles.iconButton}> + </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
