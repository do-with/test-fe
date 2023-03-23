import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useEffect, useState} from 'react';
import Home from './Home';
import Login from "./Login";
import kakao from "./kakao"
import Main from "./Main"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert } from 'react-native';



const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('CHECK!')`;
const Stack = createNativeStackNavigator();
const html = `<div>Test</div>`;

export default function App() {
    const [hello, setHello] = useState('')


  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/hello')
  //       .then(response => setHello(response.data))
  //       .catch(error => console.log(error))
  // }, []);

  return (

    <View style={styles.container}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Home}>
                <Stack.Screen name="Home" component={Home} />
                {/*<Stack.Screen name="Login" component={Login} />*/}
                <Stack.Screen name="kakao" component={kakao} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
        <Text>App.js의 내용 ㅎㅎ</Text>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});



