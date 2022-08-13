import React, { useState, useEffect } from "react";
import database from "../../config/firebaseconfig";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./styles";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

const Task = ({ navigation }) => {
  const [task, setTask] = useState([]);

  const deleteTask = (id) => {
    database.collection("Tasks").doc(id).delete();
  };

  useEffect(() => {
    database.collection("Tasks").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
    });
  }, []);
  //console.log(task);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({ item }) => {
          return (
            <View style={styles.Tasks}>
              <TouchableOpacity style={styles.checkIcon}>
                <FontAwesome
                  name="check"
                  size={40}
                  onPress={() => {
                    item.status = !item.status;
                    database
                      .collection("Tasks")
                      .doc(item.id)
                      .update({ status: item.status });
                  }}
                  color={item.status ? "#228c22" : "#7f7f7f"}
                ></FontAwesome>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.descriptionArea}
                onPress={() => {
                  navigation.navigate("Detalhes", {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    status: item.status,
                  });
                }}
              >
                <Text style={styles.titleTask}>
                  {
                    /* item.title.length > 50
                    ? item.title.substring(0, 50) + "... "
                    :  */ item.title
                  }
                </Text>
                <Text style={styles.descriptionTask}>
                  {
                     item.description.length > 50
                    ? item.description.substring(0, 50) + "... "
                    :  item.description
                  }
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteIcon}
                onPress={() => {
                  deleteTask(item.id);
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
