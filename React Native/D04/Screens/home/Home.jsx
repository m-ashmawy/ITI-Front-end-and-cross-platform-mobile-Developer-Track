import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Search from "./Search";
import Users from "./Users";

const Home = ({ navigation }) => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setusers(res.data));
  }, []); //Component did mount
  const [filterdUsers, setfilterdUsers] = useState(users);

  const getSearchWord = (searchWord) => {
    if (searchWord === "") {
      setfilterdUsers(users);
    } else {
      setfilterdUsers(
        users.filter((user) =>
          user.name.toLowerCase().includes(searchWord.toLowerCase())
        )
      );
    }
  };

  const handleClickDetails = (user) => {
    navigation.navigate("userdetails", { user });
  };

  return (
    <View style={styles.main}>
      <Search getSearchWord={getSearchWord} />
      <Users
        filterdUsers={filterdUsers}
        handleClickDetails={handleClickDetails}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
});

export default Home;
