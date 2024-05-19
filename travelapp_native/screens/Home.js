import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { DrawerActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { getDatabase, ref, onValue } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseApp = require("../firebase");

const database = getDatabase(firebaseApp.FIREBASE_APP);
const auth = firebaseApp.FIREBASE_AUTH;
const storage = getStorage(firebaseApp.FIREBASE_APP);

const { width } = Dimensions.get("screen");

const COLORS = {
  white: "#FFF",
  dark: "#000",
  primary: "#04555c",
  secondary: "#e1e8e9",
  light: "#f9f9f9",
  grey: "#dddedd",
  red: "red",
  orange: "#f5a623",
};
const MAX_DESCRIPTION_LENGTH = 100;

const Card = ({ place, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Detail", place)}
    >
      <ImageBackground style={style.cardImage} source={{ uri: place.imageUrls[0] }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="place" size={20} color={COLORS.white} />
            <Text style={{ marginLeft: 5, color: COLORS.white }}>
              {place.address}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const RecommendedCard = ({ navigation, place }) => {
  const truncateDescription = (description) => {
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      return description.substring(0, MAX_DESCRIPTION_LENGTH) + '...';
    }
    return description;
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("News")}
    >
      <ImageBackground style={style.rmCardImage} source={{ uri: place.imageUrls[0] }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Icon name="place" size={22} color={COLORS.white} />
              <Text style={{ color: COLORS.white, marginLeft: 5 }}>
                {place.address}
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ color: "white", fontSize: 15 }}>
              {truncateDescription(place.description)}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const [historyData, setHistoryData] = useState([]);
  const [articleData, setArticleData] = useState([]);
  const [festivalData, setFestivalData] = useState([]);

  useEffect(() => {
    const historyRef = ref(database, "history");
    const ArticleRef = ref(database, "article");
    const festivalRef = ref(database, "festival");

    onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const historyArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setHistoryData(historyArray);
      } else {
        setHistoryData([]);
      }
    });

    onValue(ArticleRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const articleArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setArticleData(articleArray);
      } else {
        setArticleData([]);
      }
    });

    onValue(festivalRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const festivalArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setFestivalData(festivalArray);
      } else {
        setFestivalData([]);
      }
    });
  }, []);

  const ListCategories = ({ navigation }) => {
    const categoryIcons = [
      <TouchableOpacity onPress={() => navigation.navigate("ListPost", {historyData})}>
        <Icon name="church" size={25} color={COLORS.primary} />
      </TouchableOpacity>,
      <TouchableOpacity onPress={() => navigation.navigate("Festival", {festivalData})}>
        <Icon name="festival" size={25} color={COLORS.primary} />
      </TouchableOpacity>,
      <TouchableOpacity onPress={() => navigation.navigate("NewsList", { articleData })}>
        <Icon name="school" size={25} color={COLORS.primary} />
      </TouchableOpacity>,
    ];
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Icon onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} name="sort" size={28} color={COLORS.white} />
        <Icon name="notifications-none" size={28} color={COLORS.white} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingBottom: "50" }}
      >
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={style.headerTitle}>Explore the</Text>
            <Text style={style.headerTitle}>Ha Noi Tourism</Text>
            <View style={style.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={{ color: COLORS.grey }}
              />
            </View>
          </View>
        </View>
          
        <ListCategories navigation={navigation} />
        <Text style={style.sectionTitle}>Địa Điểm</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={historyData}
            renderItem={({ item }) => (
              <Card place={item} navigation={navigation} />
            )}
          />
          <Text style={style.sectionTitle}>Địa Điểm Nổi Bật</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={historyData}
            renderItem={({ item }) => (
              <RecommendedCard place={item} navigation={navigation} />
            )}
          />
        </View>
      </ScrollView>
      <View style={style.footer}>
        <FontAwesomeIcon icon={faHome} size={25} />
        <FontAwesomeIcon icon={faHeart} size={25} />
        <FontAwesomeIcon icon={faUser} size={25} />
      </View>
    </SafeAreaView>
  );
};


const style = StyleSheet.create({
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
export default Home;
