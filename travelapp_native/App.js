import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import DetailsScreen from './screens/Detail';
import LoginScreen from './screens/LoginScreen';
import ListPost from './screens/ListPost';
import Festival from './screens/Festival';
import ArticleScreen from './screens/news';
import NewsList from './screens/NewsList';
import About from './screens/About';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={DetailsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={MainStackNavigator} options={{ headerShown: false }} />
        <Drawer.Screen name="ListPost" component={ListPost} options={{ headerShown: false }} />
        <Drawer.Screen name="Festival" component={Festival} options={{ headerShown: false }} />
        <Drawer.Screen name="NewsList" component={NewsList} options={{ headerShown: false }} />
        <Drawer.Screen name="News" component={ArticleScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="About" component={About} options={{ headerShown: false }} />
        <Drawer.Screen name="Logout" component={LoginScreen} options={{ headerShown: false }} />
        {/* Remove the Detail screen from the Drawer */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
