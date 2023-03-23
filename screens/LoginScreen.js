// import {Text, TouchableOpacity, View} from "react-native-web";
// import {Button, Linking} from "react-native";
// import {KAKAO_AUTH_URL} from "../share/kakaoAuth";
//
// function LoginScreen(){
//     const kakaoLogin = () => {
//         Linking.openURL(KAKAO_AUTH_URL);
//     // window.location.href = KAKAO_AUTH_URL;
//   }
//
//   return (
//       <View>
//           {/*<Button */}
//           {/*    onClick={()=>kakaoLogin()}*/}
//           {/*    title = "카카오 로그인"*/}
//           {/*>*/}
//           {/*</Button>*/}
//           <TouchableOpacity
//               onPress={()=>kakaoLogin()}
//           >
//               <Text>카카오 로그인</Text>
//           </TouchableOpacity>
//       </View>
//   );
// }
//
// export default LoginScreen;

import {TouchableOpacity, View, Text} from "react-native-web";
import React from "react";
import {useNavigation} from "@react-navigation/native";

function LoginScreen() {
    const navigation = useNavigation(); ;

    const clickKakaoLoginHandler = () => {
        console.log("kakao 로그인")
        navigation.push('KakaoAuthHandle', {
            pathname: "https://kauth.kakao.com/oauth/authorize",
            query: {
                "response_type": "code",
                "client_id": "82ee1e22b77d96174df564b98166f90b",
                "redirect_uri": "http://localhost:19006/user/kakao"
            }
        })
    }

    return (
        <View>
            <TouchableOpacity
                style={{"background": "#FADF0A"}}
                onPress={clickKakaoLoginHandler}>
                <Text>카카오 로그인</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;