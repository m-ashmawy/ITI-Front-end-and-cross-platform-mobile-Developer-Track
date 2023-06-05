import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Search = ({ getSearchWord }) => {
  const [searchText, setsearchText] = useState("");

  const handleChangeText = (val) => {
    setsearchText(val);
    getSearchWord(val);
  };
  return (
    <View>
      <TextInput
        style={styles.searchInput}
        value={searchText}
        onChangeText={handleChangeText}
        placeholder="Search by name"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: "white",
    padding: 8,
    color: "#000",
    fontSize: 20,
    margin: 12,
    borderRadius: 2,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
});
// FE5655
export default Search;
