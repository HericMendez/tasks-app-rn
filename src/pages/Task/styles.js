import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  buttonNewTask: {
    width: 70,
    height: 70,
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "#f92e6a",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center"
  },

  iconButton: {
    color: "#fff",
    fontSize: 40,
  },
});

export default styles;
