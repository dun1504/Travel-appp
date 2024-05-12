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
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
const SLIDER_WIDTH = Dimensions.get("window").width;
const data = [
  {
    id: 1,
    title: "Lễ hội đền Cổ Loa",
    date:"Mong 2 thang gieng",
    location:"Dong Anh",
    src: require("../../assets/images/festival/pic1.jpg"),
  },
  {
    id: 2,
    title: "Lễ hội Đống Đa",
    src: require("../../assets/images/festival/pic2.jpg"),
    date:"Mong 2 thang gieng",
    location:"huyện Đông Anh",    
  },
  {
    id: 3,
    title: "Hội chùa Hương",
    src: require("../../assets/images/festival/pic3.jpg"),
    date:"Mong 6 thang gieng",
    location:"huyện Mỹ Đức",
  },
  {
    id: 4,
    title: "Lễ hội Đền Gióng",
    src: require("../../assets/images/festival/pic4.jpg"),
    date:"Mong 9 thang gieng",
    location:"huyện Sóc Sơn",
  },
  // Add more items as needed
];
const Item = ({ item, navigation }) => (
  <View style={styles.itemContainer}>
    <ImageBackground source={item.src} resizeMode="cover" style={styles.image}>
      <TouchableOpacity
        style={styles.homeBtn}
        onPress={() => navigation.navigate("LHSK2")}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.location}><FontAwesomeIcon icon={faLocationDot} color="white"/>{item.location}</Text>
          </View>
          <View style={styles.timeContainer}>
          
              <Text style={styles.date}><FontAwesomeIcon icon={faCalendarDays} color="white"/>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);
export default function LHSK1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} >
          <FontAwesomeIcon icon={faLeftLong} size={25} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.logo}>Lễ Hội Sự Kiện</Text>
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
    justifyContent: "flex-end",
  },
  title: {
    color: "yellow",
    fontSize: 23,


  },
  buttonContainer:{
    justifyContent:"space-between",
    flexDirection:"row",
    height:80,
    backgroundColor: "#000000c0",
    alignItems:"center",
    padding:10,
  },
  titleContainer:{
    color:"yellow",
  },
  location:{
    color:"white",
  },
  timeContainer:{
    
  },
  date:{
    color:"white",
  }
});
