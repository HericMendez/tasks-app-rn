import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { storeObject, getData, importData } from "../../config/asyncStorage";

import styles from "./styles";
import { nanoid } from "nanoid";

const NewTask = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);

  const addTask = () => {
    if (title && description) {
      const newTaskId = nanoid(15);
      const newTask = {
        id: newTaskId,
        name: title,
        desc: description,
        status: false,
      };

      console.log(newTask);
      storeObject(newTask.id, newTask);
      navigation.navigate("My Checklist");

    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Comprar Pão"
        onChangeText={setTitle}
        value={title}
      ></TextInput>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.largeInput}
        placeholder="Ex: Não comprar o troco em bala"
        onChangeText={setDescription}
        value={description}
        multiline={true}
        numberOfLines={1}
      ></TextInput>
      <TouchableOpacity style={styles.buttonNewTask} onPress={addTask}>
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewTask;
