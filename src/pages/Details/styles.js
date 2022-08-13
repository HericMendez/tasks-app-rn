import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  label: {
    width: "90%",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
    color: "#f92e6a",
  },
  input: {
    width: "90%",
    alignItems: "flex-start",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    height:50,
    borderBottomWidth: 1,
    borderBottomColor: "#f92e6a",
  },

  largeInput: {
    width: "90%",
    textAlignVertical: "top",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,

    height: "auto",
    minHeight:50,
    borderBottomWidth: 1,
    borderBottomColor: "#f92e6a",
    overflowVertical: "visible"
  },

  buttonNewTask: {
    width: 60,
    height: 60,
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
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default styles;
