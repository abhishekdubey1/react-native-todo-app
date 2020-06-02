import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function AddTodo ({submitHandler}) {
  const [text, setText] = useState('')
  
  const changeHandler = (val) => {
      setText(val)
  }
  
  return (
      <View>
          <TextInput
            placeholder="Enter Name"
            keyboardType="numeric"
            style={styles.input}
            multiline
          />
          <Button title="Add-Item" onPress={() => submitHandler(text)}  ></Button>
      </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    margin: 10,
    borderBottomColor: "black",
  },
});