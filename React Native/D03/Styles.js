import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
  },
  addContainer: {
    height: "100%",
    backgroundColor: "black",
    alignItems: "center",
  },
  section: {
    marginTop: 70,
  },
  item: {
    backgroundColor: "whitesmoke",
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  header: {
    fontSize: 32,
    backgroundColor: "grey",
    color: "white",
  },
  title: {
    fontSize: 24,
    marginRight: 20,
  },

  input: {
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 20,
    width: 320,
    height: 50,
    borderRadius: 15,
    padding: 15,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  button: {
    backgroundColor: "#24788F",
    color: "white",
    paddingRight: 50,
    paddingTop: 10,
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 100,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navBtn: {
    // backgroundColor: "#24788F",
    // width: 130,
    // borderRadius: 20,
    // marginTop: 20,
    // padding: 5,
    // marginLeft: 180,
  },
  textDone: {
    color: "red",
    fontSize: 25,
    position: "absolute",
    top: -15,
    left: 3,
  },
  text: {
    color: "white",
    fontSize: 15,
    marginTop: -8,
  },
  userNum: {
    color: "white",
    fontSize: 15,
    backgroundColor: "teal",
    width: 30,
    height: 30,
    borderRadius: 15,
    position: "absolute",
    top: -15,
    right: -15,
    textAlign: "center",
  },
  textDel: {
    color: "white",
    fontSize: 15,
    position: "absolute",
    top: -3,
    left: 3,
  },
  textChecked: {
    color: "lightgreen",
    fontSize: 20,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#24788F",
    marginTop: 20,
    width: 320,
    height: 60,
    borderRadius: 15,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 10,
    borderRightWidth: 4,
    borderColor: "white",
  },
  circleDone: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#cccccc",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  circleDel: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  line: {
    width: 60,
    height: 3,
    backgroundColor: "red",
    position: "absolute",
    left: 105,
    top: 15,
  },
  inputContainer: {
    borderLeftWidth: 10,
    borderRightWidth: 4,
    borderColor: "#24788F",
  },
});
