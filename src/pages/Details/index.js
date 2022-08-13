import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import database from "../../config/firebaseconfig";
import styles from "./styles";

const Details = ({ navigation, route }) => {
  const [titleEdit, setTitleEdit] = useState(route.params.title);
  const [descriptionEdit, setDescriptionEdit] = useState(
    route.params.description
  );

  const idTask = route.params.id;

  const editTask = (id) => {
    database
      .collection("Tasks")
      .doc(id)
      .update({ title: titleEdit, description: descriptionEdit });
    navigation.navigate("My Checklist");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Comprar Pão"
        onChangeText={setTitleEdit}
        value={titleEdit}
        maxLength={50}
      ></TextInput>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.largeInput}
        placeholder="Ex: Não comprar o troco em bala"
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
        multiline={true}
        numberOfLines={1}

      ></TextInput>

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          editTask(idTask);
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
