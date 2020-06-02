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
import AddTodo from "./Components/AddTodo"

const App = () => {
  const [people, setPeople] = useState([
    { name: "shaun", key: Math.floor(Math.random() * 1000) },
    { name: "shaun", key: Math.floor(Math.random() * 1000) },
    { name: "shaun", key: Math.floor(Math.random() * 1000) },
    { name: "shaun", key: Math.floor(Math.random() * 1000) },
    { name: "shaun", key: Math.floor(Math.random() * 1000) },
  ]);

  const pressHandler = (key) => {
    console.log(key);
    setPeople((prevPeople) => {
      console.log("hello");
      return prevPeople.filter((person) => person.key != key);
    });
  };

  const submitHandler = (text) => {
    setPeople((prevTodos) => {
      return [
        {name: text, key: Math.floor(Math.random() * 1000)},
        ...prevTodos
      ]
    })
  }

  return (
    <View>
      <Text style={styles.header} >To-Do-List</Text>
      <View>
        <AddTodo submitHandler={submitHandler} />
        {/* Form */}
        <View>
          {/* <Image source={{uri: 'curl https://api.unsplash.com/search/photos?query=minimal'}} style={styles.img} /> */}
          {/* {people.map((item) => {
          return(
            <View key={item.id} >
              <Text>{item.name}</Text>
            </View>
          )
        })} */}
          <FlatList
            numColumns={2}
            data={people}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  pressHandler(item.key);
                }}
              >
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    padding: 5,
    margin: 10,
    borderBottomColor: "black",
  },
  text: {
    textAlign: "center",
    padding: 5,
    margin: 10,
    backgroundColor: "#AAA",
    maxWidth: 100,
  },
  header: {
    padding: 20,
    textAlign: "center",
    backgroundColor: "#777"
  }
});
export default App;
