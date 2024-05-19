import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Alert,
  Modal,
  ScrollView,
  Pressable,
  Button,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

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

const ArticleScreen = ({ navigation, route }) => {
  const item = route.params;

  console.log(item);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
     
      <ImageBackground style={{ flex: 0.3 }} src={item.imageUrls[0]}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            {item.name}
          </Text>
        </View>
        <ScrollView style={{ marginTop:10 }}>
          <Text style={{ lineHeight: 22 }}>
            {item.description}
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({

  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },


});

export default ArticleScreen;
