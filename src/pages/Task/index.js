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

const Task = () => {
  const [task, setTask] = useState([]);

  useEffect(async () => {
    const list = [];
    const tasksCol = await collection(database, "Tasks");
    const taskSnapshot = await getDocs(tasksCol);
    taskSnapshot.docs.forEach((doc) => {
      list.push({ ...doc.data(), id: doc.id });
    });
    setTask(list);
  }, []);

  return (
    <View>
      <Text>Tarefas</Text>
    </View>
  );
};

export default Task;
