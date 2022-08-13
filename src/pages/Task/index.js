import React, { useState, useEffect, useCallback } from "react";
import database from "../../config/firebaseconfig";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./styles";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Task = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const getData = useCallback(async () => {
    const list = [];
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    result.forEach((item) => {
      item.shift();
      const parsedJson = JSON.parse(item);
      list.push(parsedJson);
    });
    setTasks(list);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log(tasks);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item }) => {
          return (
            <View style={styles.Tasks}>
              <TouchableOpacity style={styles.checkIcon}>
                <FontAwesome
                  name="check"
                  size={40}
                  onPress={() => {
                    item.status = !item.status;
                  }}
                  color={item.status ? "#228c22" : "#7f7f7f"}
                ></FontAwesome>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.descriptionArea}
                onPress={() => {
                  navigation.navigate("Detalhes", {
                    id: item.id,
                    name: item.name,
                    desc: item.desc,
                    status: item.status,
                  });
                }}
              >
                <Text style={styles.titleTask}>
                  {
                    /* item.name.length > 50
                    ? item.name.substring(0, 50) + "... "
                    :  */ item.name
                  }
                </Text>
                <Text style={styles.descriptionTask}>
                  {item.desc.length > 50
                    ? item.desc.substring(0, 50) + "... "
                    : item.desc}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteIcon}
                onPress={() => {
                  AsyncStorage.removeItem(item.id);
                  console.log(item)
                }}
              >
                <FontAwesome
                  name="trash"
                  size={30}
                  color="#f92e6a"
                ></FontAwesome>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("Nova Tarefa")}
      >
        <Text style={styles.iconButton}> + </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;

//https://stackoverflow.com/questions/30594080/how-to-have-ellipsis-effect-on-text
