import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#04555c',
  secondary: '#e1e8e9',
  light: '#f9f9f9',
  grey: '#dddedd',
  red: 'red',
  orange: '#f5a623',
};

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    // Ví dụ:
    if (username === 'admin' && password === '123456') {
      // Đăng nhập thành công, chuyển đến màn hình HomeScreen
      navigation.navigate('Home');
    } else {
      // Đăng nhập thất bại, hiển thị thông báo lỗi
      alert('Invalid username or password');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../assets/images/carousel/pic1.jpg')}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor={COLORS.grey}
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={COLORS.grey}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={handleLogin}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: COLORS.white,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  btn: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 'bold',
  },
});

export default LoginScreen;
