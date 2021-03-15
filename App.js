//React
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

//Slider
import Slider from "@react-native-community/slider";

//Clipboard
import Clipboard from "expo-clipboard";

//Style
import { styles } from "./src/styles/styles";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function App() {
  const [password, setPassword] = useState("");
  const [size, setSize] = useState(5);

  function generatePassword() {
    let pass = "";

    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }

    setPassword(pass);
  }

  function copyPassword() {
    Clipboard.setString(password);
    alert("Senha copiada com sucesso.");
  }

  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={styles.slider}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#f49819"
          maximumTrackTintColor="#000000"
          thumbTintColor="#f49819"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      {password !== "" && (
        <View style={styles.area}>
          <TouchableOpacity onLongPress={copyPassword}>
            <Text style={styles.password}> {password}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
