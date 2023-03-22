import {Text, TouchableOpacity, View} from "react-native-web";
import {Button, Linking} from "react-native";
import {KAKAO_AUTH_URL} from "../share/kakaoAuth";

function LoginScreen(){
    const kakaoLogin = () => {
        Linking.openURL(KAKAO_AUTH_URL);
    // window.location.href = KAKAO_AUTH_URL;
  }

  return (
      <View>
          {/*<Button */}
          {/*    onClick={()=>kakaoLogin()}*/}
          {/*    title = "카카오 로그인"*/}
          {/*>*/}
          {/*</Button>*/}
          <TouchableOpacity
              onPress={()=>kakaoLogin()}
          >
              <Text>카카오 로그인</Text>
          </TouchableOpacity>
      </View>
  );
}

export default LoginScreen;