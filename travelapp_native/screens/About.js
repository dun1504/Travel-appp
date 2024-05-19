// About.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { TouchableOpacity } from "react-native-gesture-handler";

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faAngleLeft} size={25} />
        </TouchableOpacity>
        <View></View>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Ứng dụng tìm hiểu văn hóa du lịch địa phương</Text>
        <Text style={styles.text}>
          Chào mừng bạn đến với ứng dụng tìm hiểu văn hóa và du lịch địa phương!
          Ứng dụng của chúng tôi được phát triển với mục tiêu mang đến cho người
          dùng một nền tảng tiện lợi để khám phá và tìm hiểu về các lễ hội, di
          tích lịch sử, và các địa điểm du lịch đặc sắc ở địa phương. Sứ mệnh
          của chúng tôi là kết nối bạn với văn hóa địa phương và các sự kiện
          quan trọng, giúp bạn có được cái nhìn sâu sắc và chân thực về các nền
          văn hóa đa dạng. Chúng tôi tin rằng việc hiểu biết và trải nghiệm các
          giá trị văn hóa khác nhau sẽ làm phong phú thêm cuộc sống của chúng ta
          và mở rộng tầm nhìn về địa phương.
        </Text>
        
        <Text style={styles.text}>
          Cảm ơn đã sử dụng và mong rằng nó sẽ có ích với bạn trong hành trình khám phá địa phương!
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  header: {
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
  scrollView: {
    marginHorizontal: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#04555c",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});

export default About;
