import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Alert,
  Modal,
  Pressable,
  Image,
  TouchableOpacity, Dimensions, TextInput
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
const SLIDER_WIDTH = Dimensions.get("window").width;
const LHSK2 = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAlarmVisible, setModalAlarmVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faXmark} size={25} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.logo}>Chi tiết Lễ hội</Text>

        </View>
        <View>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalAlarmVisible(true)}
          >
            <FontAwesomeIcon icon={faBell} size={25} />
          </Pressable>

        </View>
      </View>

      <ScrollView>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitle}>Hội chùa Hương</Text>
        </View>
        <Image style={styles.image} source={require("../../assets/images/festival/pic3.jpg")}>

        </Image>
        <Text style={styles.detail}>
          Trong tour du lịch Hà Nội bạn nhất định không thể bỏ qua lễ hội chùa Hương
          - là một trong những lễ hội lớn của cả nước và đặc biệt là Hà Nội. Chính vì
          vậy, cứ mỗi dịp diễn ra lễ hội, du khách thập phương ghé đến xã Hương Sơn hòa
          vào dòng người đi trẩy hội rất đông.

        </Text>
        <Text>
          Về với lễ hội chùa Hương, ai ai cũng sẽ cảm thấy sự yên bình bởi nơi đây
          là miền đất của Phật. Ngoài việc đến hội chùa Hương tham gia lễ viếng thì
          bạn có thể tham gia các hoạt động hấp dẫn khác như bơi thuyền, leo núi, nghe
          hát dân ca truyền thống. Đặc biệt, bạn sẽ có cơ hội ngồi thư giãn trên thuyền
          trôi ngắm cảnh trên suối Yến.
        </Text>
        <Text>
          Địa điểm: xã Hương Sơn, huyện Mỹ Đức, Hà Nội.
          Thời gian diễn ra: từ mùng 6 tháng giêng, kéo dài đến hạ tuần tháng 3 âm lịch
        </Text>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Map</Text>
              <Image
                style={styles.map}
                source={require("../../assets/images/map.png")}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Alarm */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalAlarmVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalAlarmVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              
              <Text style={styles.modalText}>Alarm</Text>

              <View style={styles.inputAlarm}>
                <Text>Before:</Text>
                <TextInput style={styles.input} keyboardType="decimal-pad" />
                <Text>Day</Text>
              </View>
              <View style={styles.alarmButtonContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalAlarmVisible(!modalAlarmVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalAlarmVisible(!modalAlarmVisible)}
              >
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Open Map</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default LHSK2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
  mainTitleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  mainTitle: {
    fontSize: 18,
  },
  image: {
    width: SLIDER_WIDTH,
    height: 250,
    objectFit: "cover"
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  map: {
    width: 300,
    height: 300,
  },
  input: {
    width: 60,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  inputAlarm: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  alarmButtonContainer:{
    flexDirection:"row",
    gap:10
  }
});
