import React from "react";
import {
  Text,
  View,
  SectionList,Image
} from "react-native";
import { styles } from "../../Styles";

const DATA = [
  {
    title: "Section1",
    data: ["User1", "User2", "user3"],
  },
  {
    title: "Section2",
    data: ["User1", "User2"],
  },
  {
    title: "Section3",
    data: ["User1"],
  },
  {
    title: "Section4",
    data: ["User1", "User2", "user3", "User4"],
  },
];

const Sections = () => (
  <View style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
          <Image source={require("./user.png")} style={{width:50 ,height:50,textAlign:"right"} } />
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </View>
);

export default Sections;
