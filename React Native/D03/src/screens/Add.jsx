import { useState } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import { styles } from "../../Styles";
import Users from "./Todo";
import Todo from "./Todo";

export default function Add({ navigation }) {
  const [users, setUsers] = useState([]);
  const [username, setName] = useState("");

  const handleChange = (e) => {
    setName(e);
  };
  const handleClick = (e) => {
    const newUser = { id: uuid.v4(), name: username };
    if (username.length > 3) {
      users.push(newUser);
      setUsers([...users]);
      setName("");
    } else {
      console.warn("Please enter more than 3 characters.");
    }
  };
  const handleDel = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <View style={styles.addContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Sections");
        }}
        style={styles.navBtn}
      >
        {/* <Text style={styles.text}>Go to Sections</Text> */}
      </TouchableOpacity>
      <TextInput
        style={[styles.input, styles.inputContainer]}
        value={username}
        onChangeText={handleChange}
        placeholder="Enter username"
      />
      <TouchableOpacity style={styles.button} onPress={handleClick} color="red">
        <Text style={styles.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 20,
            color: "red",
            marginTop: 20,
            marginHorizontal: 85,
          }}
          onPress={() => {
            setUsers([]);
          }}
        >
          Delete All (<Text style={styles.text}>{users.length}</Text>)
        </Text>
      </View>

      {users.map((user, index) => (
        <Todo
          userName={user.name}
          id={user.id}
          key={user.id}
          handleDelete={handleDel}
          index={index}
        />
      ))}
    </View>
  );
}
