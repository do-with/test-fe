import React, {useEffect, useState} from 'react';

import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}


  // const [hello, setHello] = useState('')
  //
  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/hello')
  //       .then(response => setHello(response.data))
  //       .catch(error => console.log(error))
  // }, []);
  //
  // return (
  //   <View style={styles.container}>
  //     <Text>test : {hello}</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

//   const kakaoLogin = () => {
//     window.location.href = KAKAO_AUTH_URL;
//   }
//
//   return (
//       <div>
//           <button onClick={kakaoLogin}>카카오 로그인</button>
//       </div>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



