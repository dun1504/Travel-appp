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
  TouchableOpacity,Dimensions
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons/faLeftLong";
const SLIDER_WIDTH = Dimensions.get("window").width;
const PTTT3 = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faLeftLong} size={25} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.logo}>Ẩm Thực</Text>
        </View>
        <View></View>
      </View>

      <ScrollView>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitle}>Bún Chả</Text>
        </View>
        <Image style={styles.image} source={require("../../assets/images/food/buncha2.jpg")}>

        </Image>
        <Text style={styles.detail}>
          Du lịch Hà Nội, bạn sẽ được chìm đắm vào thiên đường ẩm thực ngon mê
          ly với bún thang Hà Nội, bánh cuốn, bún bò Huế và bún chả siêu hấp
          dẫn. Cách làm bún chả Hà Nội tuy không quá cầu kỳ nhưng cần vô cùng tỉ
          mỉ.
        </Text>
        <Text>
          Trong một suất bún chả Hà Nội truyền thống thường có 3 thành phần
          chính là: Nước chấm: Bún chả có thơm ngon hay không phần lớn dựa vào
          cách pha nước chấm. Nước chấm cần vừa đủ chua – cay – mặn – ngọt với
          mắm, đường, giấm, tỏi, ớt được pha với phù hợp. Trong bát nước chấm
          thường có thêm nộm đu đủ xanh, cà rốt. Chả nướng: Phần chả nướng
          thường gồm 2 loại là chả viên và chả miếng. Chả miếng được làm từ thịt
          ba chỉ để vừa có độ ngọt, vừa có độ mềm nhất định. Chả viên thường
          được nặn thành khối tròn, to bằng 1/4 bàn tay, được tẩm ướp đậm đà và
          nướng dưới bếp than củi rực lửa đỏ hồng. 
        </Text>
        <Text>
          Ngày nay, mọi người thường dùng bún rối để ăn cùng bún chả. Tuy nhiên,
          trong nhiều năm về trước, bún con là loại bún phổ biến được dùng trong
          món bún chả.
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

export default PTTT3;
const styles = StyleSheet.create({
  container: {
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
  image:{
    width:SLIDER_WIDTH,
    height:300,
    objectFit:"cover"
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
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  map: {
    width: 300,
    height: 300,
  },
});
