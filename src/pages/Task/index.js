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


  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={(obj) => {
          <View style={styles.Tasks}>
            <TouchableOpacity
              style={styles.deleteTasks}
              /*onPress={()=>{deleteTask(obj.item.id)}} */
            >
              <FontAwesome name="star" size={23} color="#f92e6a"></FontAwesome>
            </TouchableOpacity>
            <Text
              onPress={()=>{
                navigation.navigate("Details", {id: obj.item.id, title:obj.item.title, description:obj.item.description}) 
              }}
            >{obj.item.title}</Text>
          </View>;
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("NewTask")}
      >
        <Text style={styles.iconButton}> + </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
