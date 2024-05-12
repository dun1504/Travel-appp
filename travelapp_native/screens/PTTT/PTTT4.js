import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  FlatList,TextInput,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons/faLeftLong";
const SLIDER_WIDTH = Dimensions.get("window").width;
const data = [
  {
    id: 1,
    title: "Bún Chả",
    src: require("../../assets/images/food/buncha1.jpg"),
  },
  {
    id: 2,
    title: "Phở",
    src: require("../../assets/images/food/pho1.jpeg"),
  },
  {
    id: 3,
    title: "Bún Đậu Mắm Tôm",
    src: require("../../assets/images/food/bundau.jpg"),
  },
  {
    id: 4,
    title: "Bánh Mì",
    src: require("../../assets/images/food/banhmi.webp"),
  },
  // Add more items as needed
];
const Item = ({ item, navigation }) => (
  <View style={styles.itemContainer}>
    <ImageBackground source={item.src} resizeMode="cover" style={styles.image}>
      <TouchableOpacity
        style={styles.homeBtn}
        onPress={() => navigation.navigate("PTTT3")}
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);
export default function PTTT4({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} >
          <FontAwesomeIcon icon={faLeftLong} size={25} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.logo}>Lễ hội truyền thống</Text>
        </View>
        <View></View>
      </View>
      <View>
        <TextInput
          style={styles.input}
          // onChangeText={}
          // value={number}
          placeholder="Search"
          keyboardType="ascii-capable"
        />
      </View>
      
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  text: {
    fontSize: 42,
  },
  itemContainer: {
    height: 200,
    marginTop: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
