//Style
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#f3f3ff",
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  area: {
    width: "80%",

    backgroundColor: "#ffffff",

    marginTop: 15,
    marginBottom: 15,

    borderRadius: 7,
  },
  slider: {
    height: 50,
  },
  button: {
    width: "80%",
    height: 50,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 25,

    backgroundColor: "#ffa200",
    borderRadius: 7,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  password: {
    textAlign: "center",

    padding: 12,

    fontSize: 20,
  },
});
