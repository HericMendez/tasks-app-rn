import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },

  Tasks: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 15,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#d3d3d3",
    padding: 10,
    borderRadius: 10,
  },

  deleteTask: {
    justifyContent: "center",
    paddingLeft: 15,
  },

  descriptionArea: {
    flexDirection: "column",
    width: "80%",
  },

  titleTask: {
    width: "70%",
    alignContent: "flex-start",
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginHorizontal: 15,
    color: "#222",
  },

  descriptionTask: {
    width: "100%",
    alignContent: "flex-start",
    paddingHorizontal: 20,
    marginBottom: 5,
    marginHorizontal: 15,
    color: "#222",
  },

  buttonNewTask: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "#f92e6a",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  iconButton: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 8,
  },
});

export default styles;
