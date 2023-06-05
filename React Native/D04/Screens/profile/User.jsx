import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const usersImages = [
  require("../../assets/images/user-male-1.jpg"),
  require("../../assets/images/user-male-2.jpg"),
  require("../../assets/images/user-male-3.jpg"),
  require("../../assets/images/user-male-4.jpg"),
  require("../../assets/images/user-male-5.jpg"),
  require("../../assets/images/user-female-1.jpg"),
  require("../../assets/images/user-female-2.jpg"),
  require("../../assets/images/user-female-3.jpg"),
  require("../../assets/images/user-female-4.jpg"),
  require("../../assets/images/user-female-5.jpg"),
];

const User = ({ route }) => {
  const [user, setuser] = useState(route.params.user);
  console.warn(route.params);
  return (
    <View style={styles.userContainer}>
      <View style={styles.dataContainer}>
        <Image style={styles.image} source={usersImages[user.id - 1]} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.text}>E-mail: {user.email}</Text>
        <Text style={styles.text}>Phone: {user.phone}</Text>
        <Text style={styles.text}>Website: {user.website}</Text>
        <Text style={styles.text}>City: {user.address.city}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    height: Dimensions.get("window").height - 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dataContainer: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 4,
  },
  image: {
    width: Dimensions.get("window").width - 50,
    height: 400,
    marginBottom: 10,
  },
  name: {
    textAlign: "center",
    fontSize: 25,
    color: "#000",
  },
  text: {
    fontSize: 20,
  },
});

export default User;
