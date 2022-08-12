import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import database from "../../config/firebaseconfig";
import styles from "./styles";

const NewTask = ({navigation}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);

  const addTask = () => {
    if(title && description){
      database.collection("Tasks").add({
        title: title,
        description: description,
        status: false,
      });
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
        style={styles.input}
        placeholder="Ex: Não comprar o troco em bala"
        onChangeText={setDescription}
        value={description}
      ></TextInput>
      <TouchableOpacity style={styles.buttonNewTask} onPress={addTask}>
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewTask;
