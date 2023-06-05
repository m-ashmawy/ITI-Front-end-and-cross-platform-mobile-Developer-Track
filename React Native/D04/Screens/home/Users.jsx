import React from "react";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Pressable,
  Dimensions,
} from "react-native";

const Users = ({ filterdUsers, handleClickDetails }) => {
  const handlePressDetails = () => {
    console.warn("Pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filterdUsers}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Pressable
              onPress={() => {
                handleClickDetails(item);
              }}
              style={styles.detailsBtn}
            >
              <Text style={styles.detailsBtnText}>Details</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
  userContainer: {
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 5,
    borderRadius: 5,
  },
  name: {
    color: "#000",
    fontSize: 20,
  },
  detailsBtn: {
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 4,
  },
  detailsBtnText: {
    color: "#FFF",
    fontSize: 15,
  },
});

export default Users;
